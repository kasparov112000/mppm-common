import { RedisConnection } from 'bullmq';
import { isEmpty } from 'lodash';

export class RedisService {
  private _redisConnection: RedisConnection;
  private _logger: any;
  private _servicename = 'RedisService';
  constructor(logger: any, redisOptions: any) {
    this._logger = logger;
    if (!isEmpty(redisOptions.host)) {
      logger.info(this._servicename, `Connecting to redis ${redisOptions.host}`);
      this._redisConnection = new RedisConnection(redisOptions, false, false);
      this._redisConnection.on('error', (err) => {
        this._logger.error(this._servicename, err);
      });
    }
  }

  async getCachedData<T>(key: string): Promise<T> {
    try {
      if (this._redisConnection) {
        this._logger.info(this._servicename, `Getting redis cache for key ${key}`);
        const client = await this._redisConnection.client;
        const dataStringValue = await client.get(key);
        return JSON.parse(dataStringValue);
      }
    } catch (err) {
      this._logger.error(this._servicename, `Redis error: ${err.message} ${err.stack}`);
    }
  }

  async setCachedData(key: string, data: string, ttlSeconds: number): Promise<void> {
    try {
      if (this._redisConnection) {
        this._logger.info(this._servicename, `Setting redis cache for key ${key}`);
        const client = await this._redisConnection.client;
        await client.set(key, data, 'EX', ttlSeconds);
      }
    } catch (err) {
      this._logger.error(this._servicename, `Redis error: ${err.message} ${err.stack}`);
    }
  }
}
