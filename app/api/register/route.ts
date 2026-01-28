import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";
import { User } from "@/model/User";

export async function POST(request: Request) {
  await dbConnect();

  try {
    const body = await request.json();

    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Faltam campos requeridos" },
        { status: 400 },
      );
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "Email já registrado em outra conta" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    console.log("User saved");
    return NextResponse.json({message: "Usuário registrado com sucesso"}, { status: 201 });
  } catch (error) {
    console.error("Register error:", error);

    return NextResponse.json(
      { message: "Erro interno" },
      { status: 500 },
    );
  }
}
