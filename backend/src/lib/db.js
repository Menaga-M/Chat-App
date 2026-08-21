import mongoose from "mongoose";

export async function connectDB(){
    try{
        const mongoUri = process.env.MONGODB_URL;

        if(!mongoUri){
            throw new Error("MONGODB_URL is required")
        }

        const conn = await mongoose.connect(mongoUri);
        console.log("MongoDB Connected", conn.connection.host);
    }catch(error){
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
}