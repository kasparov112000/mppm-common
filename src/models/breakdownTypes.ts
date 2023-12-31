import { StatusNamesEnum } from "./enums";

export interface IBreakdown {
    totalHours: number,
    totalInitiated: number,
    totalAcknowledged: number,
    [StatusNamesEnum.acknowledged]: BreakdownElement,
    [StatusNamesEnum.review]: BreakdownElement,
}

export interface IMySnapshotsBreakdown extends IBreakdown {
    acknowledgedAndReview: BreakdownElement,
    notCoveredAndDraft: BreakdownElement
}

export interface IInitiateSnapshotBreakdown extends IBreakdown {
    added: BreakdownElement,
    total: BreakdownElement,
    [StatusNamesEnum.draft]: BreakdownElement,
    notCovered: BreakdownElement
}

export type CountByState = {
    [StatusNamesEnum.acknowledged]: number,
    [StatusNamesEnum.draft]: number,
    [StatusNamesEnum.initiated]: number
}

export type HoursByState = {
    [StatusNamesEnum.acknowledged]: BreakdownElement,
    [StatusNamesEnum.draft]: BreakdownElement,
    [StatusNamesEnum.review]: BreakdownElement
}

export type BreakdownElement = {
    name: string,
    value: number,
    pct: number
}