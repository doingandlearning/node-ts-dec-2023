import mongoose from "mongoose";
import { app, port } from "./server";

// connect to the database
// app to start listening

async function startup() {
  try {
    await mongoose.connect(
      "mongodb+srv://kevin:kevin@training.1ptmm9u.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database connected.");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

startup();

// // const name = user?.identification?.primary?.name

// if(!name) {

// }
