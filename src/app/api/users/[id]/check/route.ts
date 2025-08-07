import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

export async function GET(req: Request, props: { params: Promise<{ id: string }> }) {
   
  const params = await props.params;
  const userId = params.id;
  const w = await userId;

  try {
    const result = await sql`
      SELECT * FROM users WHERE id = ${w} LIMIT 1;
    `;

    if (result.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(result[0]);
  } catch  {
    console.error('Ошибка при получении пользователя:');
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
