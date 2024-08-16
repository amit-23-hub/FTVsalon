import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://satyamsinghss2203:satyam2203@cluster0.ierfivs.mongodb.net/?').then(()=>console.log("DB connected"));

}