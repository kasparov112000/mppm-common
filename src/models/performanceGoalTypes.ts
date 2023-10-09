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

export enum MetricMeasurementUnit {
    number = '',
    percent = '%',
    day = 'Day',
    dollars = '$',
    thousands = 'k',
    millions = 'm',
    noData = 'No Data',
    dollarString = 'dollar'
}

// Interfaces
export interface IPerformanceMetricCollection {
    performanceMetricLabel: ILanguageProperty;
    performanceMetricType: string;
    sequenceNumber: number;
    metrics: Metric[];
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
    metric: Metric,
    measureDefinition: IMeasureDefinition,
}

export type Metric = {
    goalStatus: GoalStatus,
    name: string,
    percentageCompleted: number
    value?: any,
    peerAverage?: PeerAverageRange,
    measurementUnit?: string
}