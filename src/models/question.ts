import { IAnswerChoice } from "./iAnswer";

export interface Title {
    default: string;
    es: string;
  }
  
  export interface Question {
    _id?: string;
    selected?: boolean;
    type: string;
    name: string;
    inputMetric: string;
    status: string;
    title: Title;
    questionText: string;
    optlText: Title;
    choices?: IAnswerChoice[];
    isLock: boolean;
  }
  