import mongoose from 'mongoose';
import { ILanguageProperty } from './ilanguageProperty'

export interface IAnswerChoice {
  value: string;
  text: ILanguageProperty;
  na: boolean
}

export interface IAnswer {
    _id?: mongoose.Schema.Types.ObjectId;
    name: string;
    inputMetric: string;
    choices: [IAnswerChoice];
    noOfQuestionsUsed: number;
    status?: string;
    createdBy: String;
    createdAt?: Date;
    lastUpdatedBy: String;
    updatedAt?: Date
  }