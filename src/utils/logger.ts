import winston from "winston";
import { MongoDBTransportInstance } from "winston-mongodb";
import { MONGO_DB, MONGO_URI } from "../config";

const transports: winston.transport[] = [
  new winston.transports.Console(),
  new winston.transports.File({ filename: "error.log", level: "error" }),
  new winston.transports.File({ filename: "combined.log" }),
  new (winston.transports.MongoDB as MongoDBTransportInstance)({
    db: `${MONGO_URI}/${MONGO_DB}`,
    options: { useUnifiedTopology: true },
    collection: "logs",
    capped: true,
    cappedMax: 10000,
    cappedSize: 10000000,
    level: "info",
  }),
];

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports,
});

export default logger;
