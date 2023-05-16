import { IMessagingService } from './iMessagingService';
import { EventModel } from './event.model';

export abstract class EventConsumer<T> {
  public _messagingService: IMessagingService;
  constructor(messagingService: IMessagingService, queueName: string) {
    this._messagingService = messagingService;
    this._messagingService.registerWorker(queueName, this.processMessage);
  }

  public abstract processMessage(event: EventModel<T>);
}
