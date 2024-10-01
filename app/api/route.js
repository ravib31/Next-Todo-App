import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
    await ConnectDB()
}
LoadDB();
export async function GET(request){
    const todos = await TodoModel.find({});
    console.log(todos);
    // return response
    // return NextResponse.json({message:"Hello World"})
    return NextResponse.json({todos:todos})
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

export async function PUT(request){
    const mongoId = await request.nextUrl.searchParams.get('mongoId');
    await TodoModel.findByIdAndUpdate(mongoId,{
        $set:{
            isCompleted:true
        }
    });
   
    // save to database
    // return response
    // return NextResponse.json({message:"Hello World"})
    return NextResponse.json({message:"Todo Updated"})
}
export async function DELETE(request){
    const mongoId = await request.nextUrl.searchParams.get('mongoId');
    await TodoModel.findByIdAndDelete(mongoId);
    // save to database
    // return response
    // return NextResponse.json({message:"Hello World"})
    return NextResponse.json({message:"Todo Deleted"})
}