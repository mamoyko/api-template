import RedisUtil from "./utils/redis.util";

export default async () => {
  await RedisUtil.initialize();
};
