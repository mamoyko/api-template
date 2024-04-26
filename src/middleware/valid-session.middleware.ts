import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config";

const sessionMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const scopedAuth = req.headers["scoped-auth"];
  if (scopedAuth && scopedAuth === SECRET_KEY) return next();

  const authorization = req.headers["authorization"];
  const token = authorization && authorization.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err: any, user: any) => {
    if (err) return res.status(401).json({ message: "Authorization token expired" });
    req.user = user;
    next();
  });
};

export default sessionMiddleware;
