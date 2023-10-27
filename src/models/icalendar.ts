import mongoose from 'mongoose';

export interface ICalendar {
    _id?: mongoose.Schema.Types.ObjectId;
    year: number;
    startDate: Date;
    endDate: Date;
}