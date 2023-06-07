import mongoose from "mongoose";
import { NotificationDestinations } from "./notificationDestinations.enum"
import { NotificationEmailPayload } from "./notificationEmailPayload.model"
import { NotificationTypes } from "./notificationTypes.enum"
import { NotificationStatuses } from "./notificationStatus.enum";

export interface INotification {
    _id?: mongoose.Schema.Types.ObjectId;
    jobId?: string;
    notificationType: NotificationTypes;
    refId?: string;
    destination: NotificationDestinations;
    payload: NotificationEmailPayload;
    status?: NotificationStatuses;
    errorMessage?: string;
    errorObject?: any;
    createdBy: string;
    createdDate?: Date;
    lastUpdatedBy?: string;
    lastUpdatedDate?: Date;
}
