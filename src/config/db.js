import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI)

        console.log(`MongoDB Connected`);
        console.log(`Database: ${conn.connection.name}`);
        console.log(`Host: ${conn.connection.host}`);
        
    } catch(error) {
        console.error("mongodb Connection failed!");
        console.error(error.message)

        process.exit(1);
    }
    
};

export default connectDB;