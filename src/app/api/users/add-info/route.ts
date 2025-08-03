import { sql } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { email, firstName, secondName, phoneNumber, about } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    await sql`
      UPDATE users
      SET 
        firstName = ${firstName ?? ""},
        secondName = ${secondName ?? ""},
        phoneNumber = ${phoneNumber ?? ""},
        about = ${about ?? ""}
      WHERE email = ${email}
    `;

    return NextResponse.json({ message: "User info updated successfully" });
  } catch (err:any) {
    console.error("Error in /api/users/add-info:" ,err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
