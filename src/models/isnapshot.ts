import mongoose from "mongoose";
import { StatusNamesEnum, TypeNamesEnum } from "./enums";
import { StatusDates } from "./statusDates";

export interface ISnapshot {
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
    createdBy?: string;
    createdDate?: Date;
    lastUpdatedBy?: string;
    lastUpdatedDate?: Date;
  }