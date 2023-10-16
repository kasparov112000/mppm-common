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
  LessThanOneYear = 'Less than one year',
  OneToTwoYears = 'One to two years',
  TwoToThreeYears = 'Two to three years',
  ThreeToFourYears = 'Three to four years',
  FourToFiveYears = 'Four to five years',
  GreaterThanFiveYears = 'Greater than five years' 
}