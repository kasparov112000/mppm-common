import mongoose from 'mongoose';

export interface INotificationsConfig {
    _id?: mongoose.Schema.Types.ObjectId;
    notificationType: string;
    subjectLine: string;
    body: string;
    signatureLine: string;
    locale: string
  }