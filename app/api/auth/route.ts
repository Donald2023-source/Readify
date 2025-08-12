import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import User, { IUser } from "../Models/User";
import bcrypt from "bcryptjs";

const connectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("Connect to DB");
  }
};

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const { fullName, email, password } = await req.json();
    if (!email || !password || !fullName) {
      return NextResponse.json(
        { message: "A field is missing" },
        { status: 400 }
      );
    }
    const exisingUser: IUser | null = await User.findOne({ email });
    if (exisingUser) {
      return NextResponse.json({ message: "User already exists" });
    }
    const hashedPassword = bcrypt.hash(password, 10);
    const newUser = User.create({
      fullName,
      email,
      password: hashedPassword,
    });
    return NextResponse.json(
      { newUser, message: `Welcome ${fullName}` },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
