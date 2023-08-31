import { ILanguageProperty } from './ilanguageProperty';
import { IRevieweeQuestionChoice } from './irevieweeQuestionChoice';
import { RevieweeQuestionType } from './revieweeQuestionType';

export interface IRevieweeQuestion {
    questionType: RevieweeQuestionType;
    text: ILanguageProperty;
    choices: IRevieweeQuestionChoice[];
    name: string;
    isActive: boolean;
}