import * as mongoose from 'mongoose';
import { ILanguageProperty } from './ilanguageProperty';

export interface IErrors {
    _id?: mongoose.Schema.Types.ObjectId;
    type: string;
    code: string;
    text: ILanguageProperty;
}