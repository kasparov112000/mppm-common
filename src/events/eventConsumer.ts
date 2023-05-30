import { IMessagingService } from './iMessagingService';
export abstract class EventConsumer {
  private _messagingService: IMessagingService;
  constructor(messagingService: IMessagingService, queueName: string) {
    this._messagingService = messagingService;
    this.processMessage = this.processMessage.bind(this);
    this._messagingService.registerWorker(queueName, this.processMessage);
  }

  public abstract processMessage(job: any);

  public async logProgress(job: any, message: string, progress?: number, loggerPrefixMessage?: string) {
    await this._messagingService.logProgress(job, message, progress, loggerPrefixMessage);
  }
}
