import express from "express";
import userRoutes from "./users/users.routes";
import Logging from "./middlewares/logging";

export const app = express();
export const port = 3000;
app.use(express.json());
app.use(Logging);
app.use("/api/v1/users", userRoutes);

app.get("/", (req, res, next) => {
  res.json({ message: "Hello world!" });
});
