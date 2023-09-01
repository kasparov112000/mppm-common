import mongoose from 'mongoose';
import { ILanguageProperty } from './ilanguageProperty';

export interface IRevieweeQuestionChoice {
    id: mongoose.ObjectId;
    text: ILanguageProperty;
    isActive: boolean;
}