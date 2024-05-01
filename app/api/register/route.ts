import bcrypt from "bcrypt";

import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const duplicateEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (duplicateEmail) {
    return new NextResponse("Duplicate Email", { status: 400 });
  }

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
