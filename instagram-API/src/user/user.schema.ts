import { Document, Schema, model } from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';
import { User } from './user.model';

export type UserDocument = Document & User;

const userSchema: Schema = new Schema({
    email: { type: String, unique: true, required: [true, "Email is required"] },
    password: { type: String, required: [true, "Password is required"] },
    name: { type: String, required: [true, "Name is required"] },
    image: { type: String, required: [true, "Image is required"] }

}, { timestamps: true });

userSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

export const UserSchema = model<UserDocument>("UserSchema", userSchema);
