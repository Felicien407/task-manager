import mongoose from "mongoose"

export const connectDB = async () =>{
    try {
        await mongoose.connect("mongodb://localhost:27017/task-manager")
        console.log("MongoDB connected")
    } catch (error) {
       console.log("DB connection error: ", error.message) 
    }
}