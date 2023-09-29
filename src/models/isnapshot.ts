import mongoose from 'mongoose';
import { IHistory } from './contracts/history';
import { StatusNamesEnum, TypeNamesEnum } from './enums';
import { ProjectsDetail } from './projectDetailsTypes';
import { IWorkdayEmployee } from './iworkdayEmployee';
import { StatusDates } from './statusDates';
import { StatusDateLogItem } from './statusDateItem';

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
    statusLogs?: StatusDateLogItem[];
    snapshotType?: TypeNamesEnum;
    workdayEmployee?: IWorkdayEmployee;
    workdayReviewer?: IWorkdayEmployee;
    createdBy: string;
    createdDate: Date;
    lastUpdatedBy: string;
    lastUpdatedDate: Date;
    projectsDetail?: ProjectsDetail;
  }