import { IMessagingService } from "./iMessagingService";
import { EventModel } from './event.model';

export abstract class EventProducer<T> {
    public _messagingService: IMessagingService;
    private _queueName: string;
    constructor(messagingService: IMessagingService, queueName: string) {
        this._messagingService = messagingService;
        this._queueName = queueName;
        this._messagingService.registerQueue(queueName);
    }

    public async queueEvent(data: any, jobId?: string) {
        const event = this.createEventContext(data, jobId);
        event.queueName = this._queueName;
        return await this._messagingService.addJob(event);
    }

    public abstract createEventContext(data: any, jobId?: string): EventModel<T>;
}
