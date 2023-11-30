import { NextFunction, Request, Response } from "express";

export default function Logging(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("I was called");
  if (req.headers["Content-Type"] === "application/json") {
    console.log("this was a json doc");
  }
  res.appendHeader("x-testing", "this value here");
  next();
}
