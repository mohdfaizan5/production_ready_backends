import { model, Schema } from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      lower: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      lower: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    fullName: {
      type: String,
      trim: true,
    },
    avatar: {
      type: String, // Cloudanary Link
    },
    coverImage: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
  },
  { timestamps: true }
);


userSchema.pre("save", function(next){

  if(!this.isModified("password")) return next()

  this.password = bcrypt.hash(this.password)
  next()
})

userSchema.methods.isPasswordCorrect(async function(){
  return await bcrypt.compare(password, this.password)
})

export const User = model("User", userSchema);
