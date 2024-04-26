import { createClient, RedisClientType } from "redis";
import { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT } from "../config";

export default class RedisUtil {
  static redisClient: RedisClientType;
  static async initialize() {
    this.redisClient = await createClient({
      password: REDIS_PASSWORD,
      socket: {
        host: REDIS_HOST,
        port: REDIS_PORT,
      },
    });
  }

  static useConnection() {
    return this.redisClient;
  }
}
