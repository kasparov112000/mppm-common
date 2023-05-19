import mongoose from "mongoose";

export interface IReviewerResponse {
    _id?: mongoose.Schema.Types.ObjectId;
    snapshotId: mongoose.Schema.Types.ObjectId;
    templateId: mongoose.Schema.Types.ObjectId;
    questionsAnswers: ReviewerAnswer[];
}

export type ReviewerAnswer = {
    sectionIndex: number,
    categoryIndex: number,
    questionId: string,
    answerId: string,
    answerText: string
}