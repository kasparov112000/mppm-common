import mongoose from "mongoose";

export interface IEmployee {
    _id?: mongoose.Schema.Types.ObjectId;
    workdayId: string;
    partyId: string;
    guid: string;
    firstName: string;
    preferredFirstName: string;
    lastName: string;
    email: string;
    managementLevel: string;
    segment: string;
    employeeStatus: string;
    employeeStatusCode: string;
    relationshipLeaderPartyId: string;
    isRelationshipLeader: boolean;
    isTalentConsultant: boolean;
  }