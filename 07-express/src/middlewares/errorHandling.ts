import { NextFunction, Request, Response } from "express";
import { NotFound } from "../users/users.controller";

export default function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof NotFound) {
    res
      .status(404)
      .json({ message: `Can't find ${error.resource} with that id.` });
  }
  res.status(500);
  res.json({ message: "Something went wrong" });
}
