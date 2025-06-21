import mongoose from "mongoose";

// Function to connect to the mongoose database

export const connectDB = async () =>{
    try{
        mongoose.connection.on('connected',()=>console.log("Database is connected"));

        await mongoose.connect(`${process.env.MONGODB_URL}/chat-app`)
    }
    catch (error){
        console.log("Database is not connected");
        // console.log(error);
    }
}