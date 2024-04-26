// src/app.ts
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { connectToMongo } from "./utils/mongo";
import router from "./routes";
import { isDev } from "./config";
import setup from "./setup";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();

app.set("trust proxy", 1);

app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);

app.use(express.json());

// Set up rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

if (!isDev) app.use(limiter);

// Set up security headers
app.use(helmet());
app.disable("x-powered-by");

// Use router for routing
app.use("/api", router);

const server = createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

import events from "./events";

events(io);

// Connect to MongoDB
connectToMongo()
  .then(() => {
    // Run setup
    setup();
  })
  .catch((err) => {
    console.log(err);
  });

export default server;
