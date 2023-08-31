import { MicroserviceConnection } from "../models/contracts/microservice";

const microservices = {
    systemSettings: new MicroserviceConnection('http://system-settings', 3011, 'system-settings'),
    employees: new MicroserviceConnection('http://employees', 3004, 'employees', { byPartyId: 'byPartyId', byName: 'byName' }),
    snapShot: new MicroserviceConnection('http://snapshots', 3001, 'snapshots', { byReviewerPartyId: 'byReviewerPartyId' }),
    calendars: new MicroserviceConnection('http://calendars', 3006, 'calendars')
}

export {
    microservices
};
