import mongoose from "mongoose";
import { NotificationTypes } from "./notificationTypes.enum";

export interface INotificationsConfig {
    _id?: mongoose.Schema.Types.ObjectId;
    notificationType: NotificationTypes;
    subjectLine: string;
    body: string;
    signatureLine: string;
    locale: string;
  }
