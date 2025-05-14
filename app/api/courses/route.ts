import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
        try {
            const { userId } = await auth();

            if(!userId){
                return NextResponse.json({error:"Unauthorized"}, {status:401})

            }

            const user = await prisma.user.findUnique({
                where:{
                    clerkId:userId
                }
            })

            if(!user){
                return NextResponse.json({error:"User not found"}, {status:404})
            }

            const courses = await prisma.course.findMany({
                where:{
                    userId:user.id
                }
            })

            return NextResponse.json(courses, {status:200});
            
        } catch (error) {
            console.log("Error fetching courses:", error);
            return NextResponse.json({ error: "Failed to fetch courses" }, { status: 500 });
        }
}