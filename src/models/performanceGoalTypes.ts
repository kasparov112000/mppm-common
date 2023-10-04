import { ILanguageProperty } from "./ilanguageProperty"

// Enums
export enum GoalStatus {
    Met = 'Met',
    NotMet = 'NotMet',
    NA = 'n.a.'
}

export enum PeerAverageRange {
    Above ='Above',
    Below = 'Below',
    Within = 'Within'
}

// Interfaces
export interface IPerformanceMetricCollection {
    performanceMetricLabel:ILanguageProperty
    performanceMetricType: string,
    sequenceNumber: number,
    metrics: Metric[]
}

// Types
export type Goal = {
    value: string,
    unit: string
}

export type SourceInfo = {
    header: ILanguageProperty,
    text: ILanguageProperty
}

export type Metric = {
    goalStatus: GoalStatus,
    name: string,
    displayName: ILanguageProperty,
    goal: Goal,
    percentageCompleted: number;
    sequenceNumber: number,
    value?: any,
    peerAverage?: PeerAverageRange,
    sourceInfo?: SourceInfo
}