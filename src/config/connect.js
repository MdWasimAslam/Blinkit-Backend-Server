import mongoose from "mongoose";

export const connectDB = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};