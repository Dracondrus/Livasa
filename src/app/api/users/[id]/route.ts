import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

// GET /api/users/:id
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const result = await sql`SELECT * FROM users WHERE id = ${id} LIMIT 1;`;

    if (result.length === 0) {
      return new NextResponse('User not found', { status: 404 });
    }

    return NextResponse.json(result[0]);
  } catch {
    console.error('Error fetching user:');
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
