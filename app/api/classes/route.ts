import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const classes = await prisma.class.findMany();
    return NextResponse.json(classes);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
