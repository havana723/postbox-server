import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { messages } from "./logs/messages";

const app = express();

app.use(cors());

app.get("/welcome", (req: Request, res: Response, next: NextFunction) => {
  const { x } = req.query;
  if (typeof x === "string") {
    const n = +x;
    res.send((n * n * n).toString());
  } else {
    res.send("welcome!");
  }
});

app.get("/api/messages", (req: Request, res: Response, next: NextFunction) => {
  res.send(messages);
});

app.listen("3001", () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: 1234🛡️
  ################################################
`);
});
