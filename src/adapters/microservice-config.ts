import { MicroserviceConnection } from "../models/contracts/microservice";

const collectionNames = { 
    employees: 'mockEmployees'
}

const microservices = {
    systemSettings: new MicroserviceConnection('http://system-settings', 3011, 'system-settings')
}

enum statusNameCds {
    active= 'A',
    unpaidLeaveOfAbsence= 'L',
    suspended= 'S',
    paidLeaveOfAbsence= 'P'
  }

export {
    microservices,
    collectionNames,
    statusNameCds
};
