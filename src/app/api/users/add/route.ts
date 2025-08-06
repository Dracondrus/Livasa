import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

// Добавление нового пользователя
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      id,
      email,
      image,
      name,
      firstName,
      secondName,
      phoneNumber,
      about,
      quantitySetupPropert
    } = body;

    // Проверим, существует ли уже пользователь
    const existingUser = await sql`SELECT * FROM users WHERE id = ${id}`;
    if (existingUser.length > 0) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    // Вставим нового пользователя
    await sql`
      INSERT INTO users (
        id, email, image, name, firstName, secondName, phoneNumber, about, quantitySetupPropert
      ) VALUES (
        ${id}, ${email}, ${image}, ${name}, ${firstName}, ${secondName}, ${phoneNumber}, ${about}, ${quantitySetupPropert}
      )
    `;

    return NextResponse.json({ message: 'User added successfully' });
  } catch {
    console.error('[USERS_ADD]');
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
