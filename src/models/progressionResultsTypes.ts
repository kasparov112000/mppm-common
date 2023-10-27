import { ILanguageProperty } from './ilanguageProperty'
import { DashboardSearchData } from './dashboardSearchData'

export interface IDashboardProgressionDistribution {
    answerTypeId: string,
    label?: ILanguageProperty,
    value: number
}

export interface IDashboardProgressionResultsData {
    partyId: string,
    performanceYear: number,
    currentLevelStartDate: Date,
    acknowledgedPercent: number,
    progressionDistribution: IDashboardProgressionDistribution[]
}

export type DashboardProgressionResults = {
    currentLevelStartDate: Date,
    currentPerformanceYearStartDate: Date,
    acknowledgedPercent: number,
    progressionDistribution: IDashboardProgressionDistribution[]
}

export type DashboardProgressionResultsResponse = {
    searchData: DashboardSearchData,
    progressionResults: DashboardProgressionResults
}