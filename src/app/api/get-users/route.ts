// src/app/api/get-users/route.ts
import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const users = await sql`SELECT * FROM users`;
  return NextResponse.json(users);
}
