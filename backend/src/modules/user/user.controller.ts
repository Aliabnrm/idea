import type { Request, Response } from "express";
import * as userService from "./user.service.js";

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await userService.getAll();
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
    try {
      const user = await userService.create(req.body);
      res.status(201).json(user);
    } catch (error: any) {
      console.error(error);
      
      if (error.status) {
        return res.status(error.status).json({ message: error.message });
      }

      res.status(500).json({ message: "Internal server error" });
    }
  };
  
