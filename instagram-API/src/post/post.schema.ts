
import { Document, Schema, model } from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';
import { Post } from "./post.model";

export type UserDocument = Document & Post;

const postSchema: Schema = new Schema({
    image: { type: String, unique: true, required: [true, "Image is required"] },
    description: { type: String, required: [true, "Description is required"] },
    emitter: { type: Schema.Types.ObjectId, ref: 'UserSchema', required: [true, "Name is required"] },
    date: { type: Date, required: [true, "Date is required"] }

}, { timestamps: true });

postSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

export const PostSchema = model<UserDocument>("PostSchema", postSchema);