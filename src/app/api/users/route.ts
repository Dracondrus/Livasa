import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET() {
  try {
    const users = await sql`
      SELECT id, email, image, name, firstName, secondName, phoneNumber, about, quantitysetuppropert
      FROM users;
    `;
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
