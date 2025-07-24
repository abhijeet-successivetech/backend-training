import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = async () => {
    try {
        const dbUrl = process.env.DATABASE_URL;
        
        if (!dbUrl) {
            throw new Error("DATABASE_URL environment variable is not defined");
        }

        await mongoose.connect(dbUrl);
        console.log(" Connected to MongoDB successfully");
        
    } catch (error) {
        console.error(" MongoDB connection failed:");
        process.exit(1);
    }
}
