import { NextResponse } from "next/server";
import {sql} from "@/lib/db";

export async function GET() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        name TEXT,
        email TEXT UNIQUE,
        image TEXT,
        firstName TEXT DEFAULT '',
        secondName TEXT DEFAULT '',
        phoneNumber TEXT DEFAULT '',
        setupPlace INTEGER DEFAULT 5
      );
    `;

    return NextResponse.json({ message: "Users table created or already exists" });
  } catch (error) {
    console.error("Error creating users table:", error);
    return NextResponse.json({ error: "Failed to create table" }, { status: 500 });
  }
}
