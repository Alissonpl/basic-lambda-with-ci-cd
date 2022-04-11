import serverless from "serverless-http";
import express from "express";
const app = express();

app.get("/", (_req, res, _next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

export const handler = serverless(app);
