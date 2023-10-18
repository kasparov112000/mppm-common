import { ILanguageProperty } from './ilanguageProperty'
import { DashboardSearchData } from './dashboardSearchData'

export type PerformanceResultAnswer = {
    text: string,
    value: number,
    index: number,
    isNA: boolean
}

export type PerformanceResultQuestion = {
    text: ILanguageProperty,
    answersPercent: PerformanceResultAnswer[]
}

export type PerformanceResult = {
    inputMetric: string,
    questions: PerformanceResultQuestion[]
}

export type PerformanceResultResponse = {
    searchData: DashboardSearchData,
    performanceResults: PerformanceResult[]
}


