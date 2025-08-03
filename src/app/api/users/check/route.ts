import {sql} from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const user = await request.json();

    if (!user?.id) {
      return NextResponse.json({ error: "User id required" }, { status: 400 });
    }

    const existing = await sql`
      SELECT * FROM users WHERE id = ${user.id}
    `;

    if (existing.length === 0) {
      await sql`
        INSERT INTO users (id, name, email, image, firstName, secondName, phoneNumber, setupPlace)
        VALUES (
          ${user.id},
          ${user.name ?? ""},
          ${user.email ?? ""},
          ${user.image ?? ""},
          ${""},
          ${""},
          ${""},
          5
        )
      `;
    }

    return NextResponse.json({ message: "User checked/added" });
  } catch  {
    console.error("Error in /api/users/check:");
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
