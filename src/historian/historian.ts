import { Validator } from '../validator/validator';
import { ValidatorParameter } from '../validator/validatorParameter';
import { HistorianDBService } from './historian.db';
import * as Rules from '../validator/validatorRules/validatorRules';
import { HistoryModel, IHistory } from '../models/contracts/history';

export class Historian {
    private _db: HistorianDBService;
    private _validator: Validator;

    constructor(db: HistorianDBService, validator: Validator) {
        this._db = db;
        this._validator = validator;
    }

    public async createDocumentHistory<T extends IHistory>(prevDoc: T, newDoc: T) {
        const newDocValidator = new ValidatorParameter(newDoc, 'newDoc').addRules([new Rules.NotNull(), new Rules.NotEmpty()]);

        this._validator.validateAndThrow([newDocValidator]);

        const refId = prevDoc?._id ?? newDoc._id;

        const historyDoc: HistoryModel<T> = {
            ref: refId.toString(),
            updatedDate: newDoc.lastUpdatedDate,
            updatedBy: newDoc.lastUpdatedBy,
            prevValue: prevDoc,
            newValue: newDoc
        }

        return await this._db.createHistory(historyDoc);
    }

    public async getAllHistory(refId: string): Promise<HistoryModel<any>[]> {
        const refIdValidator = new ValidatorParameter(refId, 'history document reference id').addRules([new Rules.NotNull(), new Rules.NotEmpty()]);
        this._validator.validateAndThrow([refIdValidator]);

        return await this._db.getAllHistory(refId);
    }

    public async getHistoryByVersion(refId: string, version: number): Promise<HistoryModel<any>> {
        const refIdValidator = new ValidatorParameter(refId, 'history document reference id').addRules([new Rules.NotNull(), new Rules.NotEmpty()]);
        const versionValidator = new ValidatorParameter(version, 'history version').addRules([new Rules.NotNull(), new Rules.IsGreaterThanOrEqual(1)]);
        this._validator.validateAndThrow([refIdValidator, versionValidator]);

        return await this._db.getHistoryByVersion(refId, version);
    }
}