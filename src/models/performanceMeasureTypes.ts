import mongoose from "mongoose";

interface IPerformanceMeasure {
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

interface IPerformanceMeasureByInputMetric {
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

interface IInputMetric {
    inputMetric: string
}
  
interface IPerformanceMeasuresByInputMetric {
    _id: IInputMetric;
    performanceMeasures: IPerformanceMeasureByInputMetric[]
}

interface IManagementLevel {
    levelName: string;
    value: string;
    na: boolean;
}

interface IPeriodDate {
    value?: Date;
    na?: boolean;
}
    
interface IPeriod {
    periodName?: string;
    startDate: IPeriodDate;
    endDate: IPeriodDate;
    managementLevels: IManagementLevel[];
}
  
interface IPeriodByInputMetric {
    periodName?: string;
    startDate: IPeriodDate;
    endDate: IPeriodDate;
    managementLevel: IManagementLevel;
}

interface ISegmentByInputMetric {
    segmentName: string;
    displayOnDashboard: string;
    measurementPeriod: string;
    periods: IPeriodByInputMetric[]
}

interface ISegment {
    segmentName: string;
    displayOnDashboard: string;
    measurementPeriod: string;
    periods: IPeriod[]
}