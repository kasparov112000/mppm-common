import { StatusNamesEnum } from "./enums"

export type SnapshotStatus = {
    name: StatusNamesEnum,
    displayText: string,
    sortOrder: number
}

export const SnapshotStatuses = {
    [StatusNamesEnum.draft]: { name: StatusNamesEnum.draft, displayText: "In draft", sortOrder: 2 } as SnapshotStatus,
    [StatusNamesEnum.initiated]: { name: StatusNamesEnum.initiated, displayText: "Initiated", sortOrder: 10 } as SnapshotStatus,
    [StatusNamesEnum.deleted]: { name: StatusNamesEnum.deleted, displayText: "Deleted", sortOrder: 999 } as SnapshotStatus,
    [StatusNamesEnum.shared]: { name: StatusNamesEnum.shared, displayText: "Shared", sortOrder: 0 } as SnapshotStatus,
    [StatusNamesEnum.returnedReviewee]: { name: StatusNamesEnum.returnedReviewee, displayText: "Returned to reviewee", sortOrder: 1 } as SnapshotStatus,
    [StatusNamesEnum.returnedReviewer]: { name: StatusNamesEnum.returnedReviewer, displayText: "Returned to reviewer", sortOrder: 10 } as SnapshotStatus,
    [StatusNamesEnum.acknowledged]: { name: StatusNamesEnum.acknowledged, displayText: "Acknowledged", sortOrder: 10 } as SnapshotStatus,
    [StatusNamesEnum.review]: { name: StatusNamesEnum.review, displayText: "In review", sortOrder: 10 } as SnapshotStatus
}