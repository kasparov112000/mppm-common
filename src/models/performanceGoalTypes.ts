import { ILanguageProperty } from "./ilanguageProperty"

// Enums
export enum GoalStatus {
    Met = 'Met',
    NotMet = 'NotMet'
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
    // more information needed to describe this object
    header: ILanguageProperty,
    text: ILanguageProperty
}

export type Metric = {
    goalStatus: GoalStatus,
    name: string,
    displayName: ILanguageProperty,
    goal: Goal,
    sequenceNumber: number,
    value?: any // Note: possible this could be Typed according to Goal::Measurement Unit,
    peerAverage?: PeerAverageRange,
    sourceInfo?: SourceInfo
}