import { TimeInGradesEnum } from "./enums"

export type TimeInGrade = {
    name: TimeInGradesEnum,
    displayText: string,
    sequenceOrder: number
}

export const TimeInGrades = {
    [TimeInGradesEnum.LessThanOneYear]: { name: TimeInGradesEnum.LessThanOneYear, displayText: "< 1 year", sequenceOrder: 1 } as TimeInGrade,
    [TimeInGradesEnum.OneToTwoYears]: { name: TimeInGradesEnum.OneToTwoYears, displayText: "1-2 years", sequenceOrder: 2 } as TimeInGrade,
    [TimeInGradesEnum.TwoToThreeYears]: { name: TimeInGradesEnum.TwoToThreeYears, displayText: "2-3 years", sequenceOrder: 3 } as TimeInGrade,
    [TimeInGradesEnum.ThreeToFourYears]: { name: TimeInGradesEnum.ThreeToFourYears, displayText: "3-4 years", sequenceOrder: 4 } as TimeInGrade,
    [TimeInGradesEnum.FourToFiveYears]: { name: TimeInGradesEnum.FourToFiveYears, displayText: "4-5 years", sequenceOrder: 5 } as TimeInGrade,
    [TimeInGradesEnum.GreaterThanFiveYears]: { name: TimeInGradesEnum.GreaterThanFiveYears, displayText: "5+ years", sequenceOrder: 6 } as TimeInGrade
}