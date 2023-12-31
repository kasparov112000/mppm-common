export enum StatusNamesEnum {
  draft = 'draft',
  initiated = 'initiated',
  deleted = 'deleted',
  shared = 'shared',
  returnedReviewee = 'returnedReviewee',
  returnedReviewer = 'returnedReviewer',
  acknowledged = 'acknowledged',
  review = 'review'
}

export enum TypeNamesEnum {
  snapshot = 'snapshot',
  reinvest = 'reinvest'
}

export enum AdminStatusNamesEnum {
  New = 'New',
  Draft = 'Draft',
  ReadyToUse = 'Ready to use',
  InUse = 'In use',
  Archived = 'Archived',
  Published = 'Published',
  ReadyToPublish = 'Ready to publish',
}

export enum QuestionType {
  SingleChoice = 'Single Choice',
  Comment = 'Comment'
}

export enum TimeInGradesEnum {
  lessThanOneYear = 'lessThanOneYear',
  oneToTwoYears = 'oneToTwoYears',
  twoToThreeYears = 'twoToThreeYears',
  threeToFourYears = 'threeToFourYears',
  fourToFiveYears = 'fourToFiveYears',
  greaterThanFiveYears = 'greaterThanFiveYears' 
}