import { ISnapshot } from "./isnapshot";

export interface ISnapshotMetaData extends ISnapshot {
    daysOutstanding: number;
    totalHours: number;
    hoursCoveredPct: number;
    employeeName: string;
    employeeLevel: string;
}
