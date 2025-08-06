import { sql } from "@/lib/db";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
 { params }: { params: { id: string } } // Correctly type params here
) {
    console.log(req)
  try {
    // 👇 await для получения `params`
    const { id } = await Promise.resolve(params);

    const result = await sql`
      SELECT quantitysetuppropert FROM users WHERE id = ${id}
    `;

    if (!result.length) {
      return new Response("Пользователь не найден", { status: 404 });
    }

    return Response.json({ quantity: result[0].quantitysetuppropert });
  } catch (error) {
    console.error("Ошибка в check-limit API:", error);
    return new Response("Ошибка сервера", { status: 500 });
  }
}
