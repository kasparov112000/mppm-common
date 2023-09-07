import mongoose from "mongoose";

export interface IReviewerResponse {
    _id?: mongoose.Schema.Types.ObjectId;
    snapshotId: mongoose.Schema.Types.ObjectId;
    templateId: mongoose.Schema.Types.ObjectId;
    questionsAnswers: ReviewerAnswer[];
    createdBy: string;
    createdDate: Date;
    lastUpdatedBy: string;
    lastUpdatedDate: Date;
}

export type ReviewerAnswer = {
    sectionIndex: number,
    categoryIndex: number,
    questionId: mongoose.Schema.Types.ObjectId,
    answerId: mongoose.Schema.Types.ObjectId,
    answerText: string
}