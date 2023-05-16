export class EventModel<T> {
    jobId: string;
    queueName: string;
    payload: T;
    options: any;
}
