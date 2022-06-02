import { model, Schema } from "mongoose";
import { UserModel } from '@/domain/models/user';

const schema = new Schema<UserModel>({
    id:  { type: String },
    name: { type: String, required: true },
    email:  { type: String, required: true }
});

export const UserModelSchema = model<UserModel>('users', schema);