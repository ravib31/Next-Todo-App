import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
    await ConnectDB()
}
LoadDB();
export async function GET(request){
    return NextResponse.json({message:"Hello World"})
}
export async function POST(request){
    const {title,description} = await request.json();
    console.log(title,description);
    await TodoModel.create({title, description});
    // save to database
    // return response
    // return NextResponse.json({message:"Hello World"})
    return NextResponse.json({message:"Todo Created"})
}