export type StatusChangeEventPayload = {
    currentStatus: string,
    eventDate: Date,
    snapshotId: string,
    currentVersion: number,
    eventTimestamp?: number
}
