// src/app/api/add-user/route.ts
import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email } = body;

  try {
    await sql`
      INSERT INTO users (name, email)
      VALUES (${name}, ${email})
    `;
    return NextResponse.json({ success: true });
  } catch  {
    return NextResponse.json({ success: false});
  }
}
