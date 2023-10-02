import { StatusNamesEnum } from "../enums";
import { ISnapshot } from "../isnapshot";

export interface ISnapshotStatusChangeEvent {
    previousStatus: StatusNamesEnum;
    currentStatus: StatusNamesEnum;
    fullDocument: ISnapshot;
}
