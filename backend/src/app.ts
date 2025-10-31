import cors from "cors";
import express from "express";
import userRoutes from "./modules/user/user.route.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", userRoutes);

export default app;
