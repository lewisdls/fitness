import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const instructors = await prisma.instructor.findMany();
    return NextResponse.json(instructors);
  } catch (error) {
    console.log(error);
  }
}
