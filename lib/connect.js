import mongoose from "mongoose";

export const connectMongoose = async () => {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
    return connect;
}