import axios from 'axios';
import { RedisService } from '../../redisService/redisService';
import { microservices } from '../microservice-config';

export class CalendarAdapter {
    public static async getCurrentPerformanceYear(redisService: RedisService): Promise<number> {
        const redisPerformanceYearKey = 'CurrentPerformanceYear';
        const cachedPerformanceYear = await redisService.getCachedData<number>(redisPerformanceYearKey);
        if (cachedPerformanceYear) {
          return cachedPerformanceYear;
        }
        const date: string = new Date().toISOString()
        const queryParamsString = `?date=${date}`;
    
        const axiosData = await axios.get(`${microservices.calendars.getFullURL()}${queryParamsString}`);
    
        const performanceYear = axiosData?.data?.year ? axiosData.data.year : null;
        if (performanceYear) {
          await redisService.setCachedData(redisPerformanceYearKey, performanceYear, 3600); // caching currentPerformanceYear for 1 hour
        }
        return +performanceYear;
    }
}