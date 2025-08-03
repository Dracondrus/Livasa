import { sql } from "@/lib/db";
import {  NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";


export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const result = await sql`
      SELECT firstname, secondname, phonenumber, about, email
      FROM users
      WHERE email = ${session.user.email}
      LIMIT 1
    `;

    if (result.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(result[0]);
  } catch (err) {
    console.error("Error in /api/users/getInfo:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
