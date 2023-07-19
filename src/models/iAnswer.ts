import mongoose from 'mongoose';

export interface IAnswerChoice {
  value: string;
  text: {
    default: string;
    es: string;
  }
  na: boolean,
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