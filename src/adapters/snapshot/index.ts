import axios from 'axios';
import { microservices } from '../microservice-config';

export class SnapShotAdapter {
    async getByReviewerPartyId(partyId: string, limit?: number): Promise<any[]> {
        const url = new URL(`${microservices.snapShot.getFullURL('byReviewerPartyId')}/${partyId}`);
        if (limit && !isNaN(+limit) && limit > 0) {
            url.searchParams.append('pageSize', limit.toString());
        }
        const response = await axios.get(url.toString());
        return response?.data;
    }
}