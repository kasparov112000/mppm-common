import axios from 'axios';
import { IEmployee } from "../../models/iemployee";
import { microservices } from '../microservice-config';

export class EmployeeAdapter {
    async findEmployeeByName(name: string): Promise<IEmployee[]> {
      const response = await axios.get(`${microservices.employees.getFullURL('byName')}/${name}`);
        return response?.data;
      }
    
      async findEmployeeByPartyId(partyId: string): Promise<IEmployee[]> {
        const response = await axios.get(`${microservices.employees.getFullURL('byPartyId')}/${partyId}`);
        return response?.data;
      }
}