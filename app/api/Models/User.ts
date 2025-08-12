import mongoose, { Document, Schema } from "mongoose";

export interface User extends Document {
    fullName: string;
    email: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    fullName: {type:String, required:true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true}
})

export default mongoose.models.User || mongoose.model<User>('User', UserShema)