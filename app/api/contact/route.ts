import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email, thread } = await req.json();
    const data = { email, thread };

    if (!data.email) {
      return NextResponse.json({ error: "Email is required" }, { status: 501 });
    }

    if (!data.thread) {
      return NextResponse.json(
        { error: "Thread is required" },
        { status: 501 }
      );
    }

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

export async function GET() {
  return NextResponse.json({ message: "Backend is working..." });
}
