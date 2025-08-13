import { NextResponse } from "next/server";
import { sql } from "@/lib/db"; // твое подключение к Neon

export async function GET() {
  try {
    const result = await sql`SELECT * FROM users`;
    return NextResponse.json(result);
  } catch  {
   
    return NextResponse.json( { status: 500 });
  }
}
