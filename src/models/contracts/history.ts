import mongoose from "mongoose"

export type HistoryModel<T extends IHistory> = {
    _id?: mongoose.Schema.Types.ObjectId,
    ref: string,
    updatedDate: Date,
    updatedBy: string,
    updatedByName: string,
    prevValue: T,
    newValue: T
}

export interface IHistory {
    _id?: mongoose.Schema.Types.ObjectId,
    lastUpdatedDate: Date,
    lastUpdatedBy: string,
    lastUpdatedByName?: string,
    version: number
}