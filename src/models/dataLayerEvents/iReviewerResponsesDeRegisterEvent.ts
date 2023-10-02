import { StatusNamesEnum } from "../enums";
import { IReviewerResponse } from "../ireviewerResponse";

export interface IReviewerResponsesDeRegisterEvent {
    previousStatus: StatusNamesEnum;
    currentStatus: StatusNamesEnum;
    fullDocument: IReviewerResponse;
}
