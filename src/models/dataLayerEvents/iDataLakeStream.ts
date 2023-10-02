export interface IDataLakeStream<T> {
    eventName: string;
    timestamp?: number;
    payload: T;
}
