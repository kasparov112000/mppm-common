import mongoose from "mongoose"

export type HistoryModel<T extends HistoryDocument> = {
    _id?: mongoose.ObjectId,
    ref: string,
    updatedDate: Date,
    updatedBy: string,
    prevValue: T,
    newValue: T
}

export type HistoryDocument = {
    _id: mongoose.ObjectId,
    lastUpdatedDate: Date,
    lastUpdatedBy: string
}