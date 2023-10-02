import { Queue, Worker, Job, JobState, JobsOptions, ConnectionOptions } from 'bullmq';
import { EventModel } from '../events/event.model';
import { IMessagingService } from '../events/iMessagingService';
import { isEmpty } from 'lodash';

export class BullService implements IMessagingService {
  private servicename = 'BullService';
  public _queue: { [name: string]: Queue };
  public _worker: { [name: string]: Worker };
  private _redisOptions: ConnectionOptions;
  private _logger: any;

  constructor(redisOptions: ConnectionOptions, logger: any) {
    this._redisOptions = redisOptions;
    this._logger = logger;
    this._queue = {};
    this._worker = {};
  }

  public async registerQueue(queueName: string) {
    // register queue
    if (isEmpty(this._queue[queueName])) {
      this._queue[queueName] = new Queue(queueName, { connection: this._redisOptions })
    }
  }

  public async registerWorker(queueName: string, fn: (job: Job) => any, concurrency = 1) {
    this._worker[queueName] = new Worker(queueName, async (job: Job) => {
      return await fn(job);
    }, { connection: this._redisOptions, concurrency: concurrency });
  }

  public async addJob(event: EventModel<any>): Promise<string | undefined> {
    if (!isEmpty(event?.options?.repeat)) {
      await this.checkAndRemoveRepeatableJobs(event.queueName);
    }
    const job = await this._queue[event.queueName].add(event.queueName, event.payload, event.options);
    return job.id;
  }

  public async removeRepeatableJob(queueName: string, key: string) {
    return await this._queue[queueName].removeRepeatableByKey(key);
  }

  public async pauseQueue(queueName) {
    await this._queue[queueName].pause();
    this._logger.info(this.servicename, `${queueName} has been paused`);
  }

  public async resumeQueue(queueName) {
    await this._queue[queueName].resume();
    this._logger.info(this.servicename, `${queueName} has been resumed`);
  }

  public async getRepeatableJobs(queueName: string) {
    const repeatableJobs = await this._queue[queueName].getRepeatableJobs();
    return repeatableJobs;
  }

  public async checkAndRemoveRepeatableJobs(queueName) {
    const jobs = await this.getRepeatableJobs(queueName);
    for (const job of jobs) {
      await this.removeRepeatableJob(queueName, job.key);
    }
  }

  public async getJobStatus(queueName: string, jobId: string): Promise<any> {

    const job = await this._queue[queueName].getJob(jobId);
    const status = await job?.getState();
    const logs = await this._queue[queueName].getJobLogs(jobId);

    return {
      job,
      status,
      logs
    }
  }

  public async close(): Promise<void> {
    const queueNames = Object.keys(this._worker);
    if (queueNames.length > 0) {
      const closeall = queueNames.map(async queuename => {
        if (this._worker[queuename]) {
          // to handle 'Missing lock for job', pausing jobs before closing.
          await this._worker[queuename].pause(true);
          await this._worker[queuename].close();
        }
      });
      await Promise.all(closeall);
    }
  }

  private async addLogToJob(job: Job, log: string) {
    await job.log(`${new Date().toString()} - ${log}`);
  }

  public async logProgress(job: Job, message: string, progress?: number) {
    if (job) {
      if (!isEmpty(message)) {
        await this.addLogToJob(job, message);
        const loggerMsg = `QueueName: ${job.queueName}, JobId: ${job.opts.jobId}, Message: ${message}`;
        this._logger.info(this.servicename, loggerMsg);
      }
      if (!isEmpty(progress?.toString())) {
        await job.updateProgress(progress);
      }
    }
  }
}
