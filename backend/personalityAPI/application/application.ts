import express from "express";
import questionRouter from "../routes/questionRoute";
import { Response, Request, NextFunction } from "express-serve-static-core";
import cors from "cors";

const appConfig = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  // application routes

  app.use("/api", questionRouter);

  // 500 errors handler

  app.use(
    (
      error: Error,
      request: Request,
      response: Response,
      next: NextFunction
    ) => {
      response.status(500).json({
        success: false,
        name: error.name || "Error",
        message: error.message || "An unexpected error occurred",
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      });
    }
  );

  return app;
};

export default appConfig;
