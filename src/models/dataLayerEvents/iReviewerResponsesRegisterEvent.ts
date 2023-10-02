import { StatusNamesEnum } from "../enums";
import { IReviewerResponse } from "../ireviewerResponse";

export interface IReviewerResponsesRegisterEvent {
    previousStatus: StatusNamesEnum;
    currentStatus: StatusNamesEnum;
    fullDocument: IReviewerResponse;
}
