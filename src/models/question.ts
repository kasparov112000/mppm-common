import { IAnswerChoice } from "./iAnswer";
import { ILanguageProperty } from "./ilanguageProperty";
export interface Question {
  _id?: string;
  selected?: boolean;
  type: string;
  name: string;
  inputMetric: string;
  status: string;
  title: ILanguageProperty;
  questionText: string;
  optlText: ILanguageProperty;
  choices?: IAnswerChoice[];
  isLock: boolean;
}
