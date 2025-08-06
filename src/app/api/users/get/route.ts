import { authOptions } from "@/lib/auth/options";
import { sql } from "@/lib/db";
import { getServerSession } from "next-auth";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.id) {
      return new Response("Unauthorized", { status: 401 });
    }

    const userId = session.user.id;

    const result = await sql`
      SELECT * FROM users WHERE id = ${userId}
    `;

    if (!result.length) {
      return new Response("Пользователь не найден", { status: 404 });
    }

    return NextResponse.json(result[0]);
  } catch (err) {
    console.error("Ошибка при получении пользователя:", err);
    return new Response("Ошибка сервера", { status: 500 });
  }
}
