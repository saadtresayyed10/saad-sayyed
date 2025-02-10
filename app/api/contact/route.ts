import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email, thread } = await req.json();
    const data = { email, thread };
    const addContact = await prisma.contact.create({
      data: data,
    });

    return NextResponse.json(
      { success: true, data: addContact },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
