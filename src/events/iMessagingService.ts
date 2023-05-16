import { EventModel } from "./event.model";

export interface IMessagingService {
    registerQueue(queueName: string);
    registerWorker(queueName: string, processor);
    addJob<T>(event: EventModel<T>);
    logProgress(job: any, message: string, progress?: number, loggerPrefixMessage?: string);
}
