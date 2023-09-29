import { StatusNamesEnum } from "./enums"

export type StatusDateLogItem = {
    status: StatusNamesEnum;
    statusDate: Date;
    partyId: string;
}