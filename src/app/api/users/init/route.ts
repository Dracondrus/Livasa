import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db'; // neon client

export async function GET(req: NextRequest) {
  console.log(req)
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        email TEXT,
        image TEXT,
        name TEXT,
        firstName TEXT,
        secondName TEXT,
        phoneNumber TEXT,
        about TEXT,
        properties JSONB DEFAULT '[]',
        quantitySetupPropert INTEGER DEFAULT 0
      );
    `;

    return NextResponse.json({ success: true, message: 'Users table initialized.' });
  } catch  {
    console.error('[INIT USERS TABLE ERROR]');
    return NextResponse.json({ success: false, error: 'Failed to initialize users table.' }, { status: 500 });
  }
}
