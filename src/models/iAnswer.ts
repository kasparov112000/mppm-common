import mongoose from 'mongoose';

export interface IAnswerChoice {
    value: string;
    text: {
      default: string;
      es: string;
    }
  }

export interface IAnswer {
    _id?: mongoose.Schema.Types.ObjectId;
    name: string;
    inputMetric: string;
    choices: [IAnswerChoice];
    noOfQuestionsUsed: Number;
    status?: string;
    createdBy: String;
    createdAt?: Date;
    lastUpdatedBy: String;
    updatedAt?: Date
  }