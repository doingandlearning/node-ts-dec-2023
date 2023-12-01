import { Response, Request } from "express";
import UserModel from "./users.model";

export class NotFound extends Error {
  constructor(name: string, public resource: string) {
    super(name);
  }
}

export async function getAllUsers(req: Request, res: Response) {
  try {
    const allUsers = await UserModel.find();
    res.send(allUsers);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
}

export async function createNewUser(req: Request, res: Response, next) {
  try {
    const { name, location, role } = req.body;
    // throw Error("Blah");
    if (!location || !name) {
      return res
        .status(400)
        .json({ message: "You need to provide a name and location." });
    }

    const newUser = new UserModel({ name, location, role });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    next(error);
    // res.status(400).json({ message: "Something went wrong" });
  }
}

export async function getUserById(req: Request, res: Response, next) {
  try {
    const user = await UserModel.findById(req.params.id);

    if (!user) {
      return next(new NotFound("not found", "user"));
    }

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
}

export async function updateUserById(req: Request, res: Response, next) {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!user) {
      return next(new NotFound("not found", "user"));
    }

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
}
