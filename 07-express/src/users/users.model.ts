import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  name: string;
  location: string;
  role?: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  role: String,
});

UserSchema.pre("save", function (doc, next) {
  const mostRecent = UserModel.findById(doc._id);
  if (mostRecent.etag !== doc.etag) {
    // throw Error
  }
});

const UserModel = mongoose.model<User>("User", UserSchema);

export default UserModel;
