import { Response, Request } from "express";
import { User } from "./users.model";

const users: User[] = [];

export class NotFound extends Error {
  constructor(name: string, public resource: string) {
    super(name);
  }
}

export function getAllUsers(req: Request, res: Response) {
  try {
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
}

export function createNewUser(req: Request, res: Response, next) {
  try {
    const user: User = req.body;
    // throw Error("Blah");
    if (!user.location || !user.name) {
      return res
        .status(400)
        .json({ message: "You need to provide a name and location." });
    }
    user.id = users.length + 1;
    users.push(user);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    next(error);
    // res.status(400).json({ message: "Something went wrong" });
  }
}

export function getUserById(req: Request, res: Response, next) {
  try {
    const user = users.find((u) => u.id === parseInt(req.params.id));

    if (!user) {
      return next(new NotFound("not found", "user"));
    }

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
}

export function updateUserById(req: Request, res: Response, next) {
  try {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      return next(new NotFound("not found", "user"));
    }

    users[userIndex] = { ...users[userIndex], ...req.body };

    res.json(users[userIndex]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
}

export function deleteUser(req: Request, res: Response) {
  try {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      return res.status(404).json({ message: "User not found" });
    }

    users.splice(userId, 1);

    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
}
