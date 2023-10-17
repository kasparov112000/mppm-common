import { TimeInGradesEnum } from "./enums"

export type TimeInGrade = {
    name: TimeInGradesEnum,
    displayText: string,
    sequenceOrder: number
}

export const TimeInGrades = {
    [TimeInGradesEnum.lessThanOneYear]: { name: TimeInGradesEnum.lessThanOneYear, displayText: "< 1 year", sequenceOrder: 1 } as TimeInGrade,
    [TimeInGradesEnum.oneToTwoYears]: { name: TimeInGradesEnum.oneToTwoYears, displayText: "1-2 years", sequenceOrder: 2 } as TimeInGrade,
    [TimeInGradesEnum.twoToThreeYears]: { name: TimeInGradesEnum.twoToThreeYears, displayText: "2-3 years", sequenceOrder: 3 } as TimeInGrade,
    [TimeInGradesEnum.threeToFourYears]: { name: TimeInGradesEnum.threeToFourYears, displayText: "3-4 years", sequenceOrder: 4 } as TimeInGrade,
    [TimeInGradesEnum.fourToFiveYears]: { name: TimeInGradesEnum.fourToFiveYears, displayText: "4-5 years", sequenceOrder: 5 } as TimeInGrade,
    [TimeInGradesEnum.greaterThanFiveYears]: { name: TimeInGradesEnum.greaterThanFiveYears, displayText: "5+ years", sequenceOrder: 6 } as TimeInGrade
}