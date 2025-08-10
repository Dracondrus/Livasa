import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET() {
  try {
    const rows = await sql`
      SELECT 
        id,
        email,
        image,
        name,
        properties
      FROM users;
    `;

    const parsed = rows.map((row) => ({
      ...row,
      properties: typeof row.properties === "string" 
        ? JSON.parse(row.properties) 
        : row.properties
    }));

    return NextResponse.json(parsed);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch properties" }, { status: 500 });
  }
}
