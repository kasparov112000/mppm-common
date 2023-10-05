import mongoose from "mongoose";
import { ILanguageProperty } from "./ilanguageProperty";

export interface IPerformanceMeasure {
    _id?: mongoose.Schema.Types.ObjectId;
    performanceMeasureName: string;
    performanceYear: string;
    inputMetric: string;
    measurementUnit: string;
    metOperator: string;
    sequenceNumber: number;
    status: string;
    segments: ISegment[]
}

export interface IPerformanceMeasureByInputMetric {
    _id?: mongoose.Schema.Types.ObjectId;
    performanceMeasureName: string;
    performanceYear: string;
    inputMetric: string;
    measurementUnit: string;
    metOperator: string;
    sequenceNumber: number;
    status: string;
    segment: ISegmentByInputMetric
}

export interface IInputMetric {
    inputMetric: string
}
  
export interface IPerformanceMeasuresByInputMetric {
    _id: IInputMetric;
    performanceMeasures: IPerformanceMeasureByInputMetric[]
}

export interface IManagementLevel {
    levelName: string;
    value: string;
    na: boolean;
}

export interface IPeriodDate {
    value?: Date;
    na?: boolean;
}
    
export interface IPeriod {
    periodName?: string;
    startDate: IPeriodDate;
    endDate: IPeriodDate;
    managementLevels: IManagementLevel[];
}
  
export interface IPeriodByInputMetric {
    periodName?: string;
    startDate: IPeriodDate;
    endDate: IPeriodDate;
    managementLevel: IManagementLevel;
}

export interface ISegmentByInputMetric {
    segmentName: string;
    displayOnDashboard: string;
    measurementPeriod: string;
    periods: IPeriodByInputMetric[]
}

export interface ISegment {
    segmentName: string;
    displayOnDashboard: string;
    measurementPeriod: string;
    periods: IPeriod[]
}

export interface IMeasureDefinition {
    performanceMeasureName: ILanguageProperty;
    inputMetric: string;
    measurementUnit: string;
    sequenceNumber: number;
    goalValue: string;
    performanceYear: string;
}