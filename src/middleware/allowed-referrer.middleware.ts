import { Request, Response, NextFunction } from "express";
import { isDev } from "../config";

export default function createAllowedReferrerMiddleware(customReferrer: string) {
  return function (req: Request, res: Response, next: NextFunction) {
    if (isDev) {
      const referringRoute = req.get("Referrer");

      if (referringRoute && referringRoute.includes(customReferrer)) {
        next();
      } else {
        return res.status(403).json({ error: "Unauthorized access" });
      }
    } else {
      next();
    }
  };
}
