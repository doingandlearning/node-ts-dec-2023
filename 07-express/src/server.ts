import express from "express";
import userRoutes from "./users/users.routes";
import Logging from "./middlewares/logging";
import errorHandler from "./middlewares/errorHandling";

export const app = express();
export const port = 3000;
app.use(express.json());
// app.use(Logging);
app.use("/api/v1/users", userRoutes);

app.get("/", (req, res, next) => {
  res.json({ message: "Hello world!" });
});

app.use(errorHandler);
