import mongoose from "mongoose";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
    lowercase: true,
  },

  lastname: {
    type: String,
    trim: true,
    lowercase: true,
  },

  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email Address");
      }
    },
  },

  password: {
    type: String,
    required: true,
    minlength: 8, // Set a minimum length for the password
  },

  role: {
    type: String,
    default: "user",
    lowercase: true,
    trim: true,
  },
});

const User = mongoose.model("user", userSchema);

export default User;
