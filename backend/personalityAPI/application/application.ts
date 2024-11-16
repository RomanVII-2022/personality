import express from "express";

const appConfig = () => {
  const app = express();
  app.use(express.json());

  return app;
};

export default appConfig;
