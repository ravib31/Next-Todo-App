import mongoose from "mongoose"

export const ConnectDB = async()=>{
    await mongoose.connect('mongodb+srv://ravibhashkar0102:5UaMDD6ikI1ZDFPH@cluster0.5xj2t.mongodb.net/todo-next');
    console.log("Connected to MongoDB");
}