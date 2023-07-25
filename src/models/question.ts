import { Types } from 'mongoose';
import { IAnswerChoice } from "./iAnswer";
import { ILanguageProperty } from "./ilanguageProperty";
export interface Question {
  _id?: string;
  type?: string;
  name: string;
  title: ILanguageProperty;
  answerId?: Types.ObjectId,
  noOfTemplatesUsed: number,
  choices?: IAnswerChoice[];
  optlText?: ILanguageProperty
  status: string;
  inputMetric?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
