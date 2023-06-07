import mongoose from 'mongoose';
import { IHistory } from './contracts/history';
import { StatusNamesEnum, TypeNamesEnum } from './enums';
import { IWorkdayEmployee } from './iworkdayEmployee';
import { StatusDates } from './statusDates';

export interface ISnapshot extends IHistory {
    _id?: mongoose.Schema.Types.ObjectId;
    name: string;
    revieweePartyID: string;
    reviewerPartyID?: string;
    description?: string;
    projectCodes?: string[];
    projectHours?: number[];
    revieweeQuestionIDs?: string[];
    revieweeQuestionAnswers?: string[]; 
    status: StatusNamesEnum;
    performanceYear?: number;
    statusDates?: StatusDates;
    snapshotType?: TypeNamesEnum;
    workdayEmployee?: IWorkdayEmployee;
    createdBy: string;
    createdDate: Date;
    lastUpdatedBy: string;
    lastUpdatedDate: Date;
  }