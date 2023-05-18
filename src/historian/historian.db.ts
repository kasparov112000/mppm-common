import mongoose from 'mongoose';
import { IHistory, HistoryModel } from '../models/contracts/history';

export class HistorianDBService {
    private _historyCollection: string;
    private _dbConnection: mongoose.Connection;

    constructor(dbConnection: mongoose.Connection, historyCollection: string) {
        this._dbConnection = dbConnection;
        this._historyCollection = historyCollection;
    }

    async createHistory<T extends IHistory>(histDoc: HistoryModel<T>) {
        return await this._dbConnection.models[this._historyCollection].create(histDoc);
    }

    async getAllHistory(refId: string): Promise<HistoryModel<any>[]> {
        const find = { ref: refId };
        return await this._dbConnection.models[this._historyCollection].find(find).lean();
    }

    async getHistoryByVersion(refId: string, version: number): Promise<HistoryModel<any>> {
        const allHistory = await this.getAllHistory(refId);
        return allHistory.find(h => h.newValue.version === version);
    }
}