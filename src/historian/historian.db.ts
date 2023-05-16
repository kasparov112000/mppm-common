import mongoose from 'mongoose';
import { HistoryDocument, HistoryModel } from '../models/contracts/history';

export class HistorianDBService {
    private _historyCollection: string;
    private _dbConnection: mongoose.Connection;

    constructor(dbConnection: mongoose.Connection, historyCollection: string) {
        this._dbConnection = dbConnection;
        this._historyCollection = historyCollection;
    }

    async createHistory<T extends HistoryDocument>(histDoc: HistoryModel<T>) {
        return await this._dbConnection.models[this._historyCollection].create(histDoc);
    }

    async getAllHistory(refId: string): Promise<HistoryModel<any>[]> {
        const find = { ref: refId };
        return await this._dbConnection.models[this._historyCollection].find(find).lean();
    }
}