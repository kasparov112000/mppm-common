import mongoose from "mongoose";

export interface IUserProfile {
    _id?: mongoose.Schema.Types.ObjectId;
    partyId: string;
    languageCode: string;
    createdBy?: string;
    createdDate?: Date;
    lastUpdatedBy?: string;
    lastUpdatedDate?: Date;
  }
