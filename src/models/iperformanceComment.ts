import mongoose from 'mongoose';

export enum CommentType {
    performance,
    progression
}

export interface IDashboardComment {
    _id?: mongoose.Schema.Types.ObjectId,
    commentType: CommentType;
    revieweePartyID: String,
    reviewerPartyID: String,
    reviewerName: String;
    reviewerLevel: String;
    dateAcknowledged: Date;
    percentOfTotalHours: Number;
    progressionResponse: String;
    progressionComments: String;
    commentsAreasOfStrength: String;
    commentsAreasOfGrowthAnddevelopment: String;
    snapshotId: String;
    snapshotName: String;
    performanceYear: Number;
    createdBy: string;
    createdDate: Date;
    lastUpdatedBy: string;
    lastUpdatedByName: string;
    lastUpdatedDate: Date;
}