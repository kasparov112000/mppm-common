import mongoose from "mongoose";

export interface IEmployee {
    _id?: mongoose.Schema.Types.ObjectId;
    workdayId: string;
    partyId: string;
    guid: string;
    firstName: string;
    preferredFirstName: string;
    lastName: string;
    preferredLastName: string;
    email: string;
    managementLevel: string;
    segment: string;
    employeeStatus: string;
    employeeStatusCode: string;
    relationshipLeaderPartyId: string;
    isRelationshipLeader: boolean;
    isTalentConsultant: boolean;
    businessTitle: string;
    costCenter: string;
    costCenterLevel4: string;
    employeeType: string;
    globalLOS: string;
    hireDate: Date;
    jobProfile: string;
    jobLevel: string;
    jobFamily: string;
    jobFamilyGroup: string;
    location: string;
    timeType: string;
    timeInGrade: string;
  }