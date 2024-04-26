import { MongoClient, Db, TransactionOptions } from "mongodb";
import { MONGO_URI, MONGO_DB } from "../config";

let db: Db;
let mongoClient: MongoClient;

export const connectToMongo = async () => {
  const client = new MongoClient(MONGO_URI, { maxPoolSize: 10, maxIdleTimeMS: 60000, connectTimeoutMS: 60000 });

  await client.connect();
  db = client.db(MONGO_DB);
  mongoClient = client;
};

export const getDB = () => {
  if (!db) {
    throw new Error("Database not connected!");
  }
  return db;
};

export const useMongoClient = () => {
  return mongoClient;
};

export const useTransactionOptions: TransactionOptions = {
  readPreference: "primary",
  readConcern: { level: "local" },
  writeConcern: { w: "majority" },
};
