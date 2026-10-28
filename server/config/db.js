import mongoose from "mongoose";
import dns from "dns";

// Force Node.js to use Google's Public DNS instead of your ISP's blocked DNS
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async () => {
    mongoose.connection.on("connected", () => console.log("MongoDB connected"));
    mongoose.connection.on("error", (err) => console.log("MongoDB connection error:", err));
    
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.error("Failed to connect:", error);
    }
}

export default connectDB;