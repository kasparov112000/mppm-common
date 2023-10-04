import { ILanguageProperty } from "./ilanguageProperty"
import { IMeasureDefinition } from './performanceMeasureTypes' 
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
    metrics: MetricData[]
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

export type MetricData = {
    goalStatus: GoalStatus,
    name: string,
    percentageCompleted: number,
    value?: any,
    peerAverage?: PeerAverageRange
}

export type Metric = {
    metricData: MetricData,
    measureDefinition: IMeasureDefinition,
    sourceInfo?: SourceInfo
}