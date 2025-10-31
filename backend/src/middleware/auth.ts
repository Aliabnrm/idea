import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import type { NextFunction, Request, Response } from "express";

export const verifyJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization || "";
    const [, token] = authHeader.split(" ");
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    if (!env.JWT_SECRET) {
      return res.status(500).json({ message: "JWT secret not configured" });
    }
    const decoded = jwt.verify(token, env.JWT_SECRET);
    (req as any).user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
