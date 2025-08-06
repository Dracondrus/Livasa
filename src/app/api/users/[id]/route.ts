import { sql } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

// GET /api/users/:id
export async function GET(req: NextRequest) {
  const pathname = req.nextUrl.pathname; // /api/users/123
  const id = pathname.split('/').pop(); // 123

  if (!id) {
    return new NextResponse('User ID is required', { status: 400 });
  }

  try {
    const result = await sql`SELECT * FROM users WHERE id = ${id} LIMIT 1;`;

    if (result.length === 0) {
      return new NextResponse('User not found', { status: 404 });
    }

    return NextResponse.json(result[0]);
  } catch  {
    console.error('Error fetching user:');
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
