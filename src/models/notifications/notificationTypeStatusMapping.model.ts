import { StatusNamesEnum } from "../enums";
import { EmailAudienceTypes } from "./emailAudienceTypes.enum";
import { NotificationTypes } from "./notificationTypes.enum";

export type NotificationTypeStatusMapping = {
    notificationType: NotificationTypes,
    previousStatus: StatusNamesEnum[],
    currentStatus: StatusNamesEnum[],
    audience: { toList: EmailAudienceTypes[], ccList: EmailAudienceTypes[] }
  };
