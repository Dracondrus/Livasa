import { IGetAllValueProperty, IUser } from "@/app/[locale]/(dashboard)/dashboard/components/GetValues";
import { sql } from "@/lib/db";


export async function PATCH(req: Request, props: { params: Promise<{ id: string }> }) {
  try {
    const params = await props.params;
    const userId = params.id;

    if (!userId) {
      return new Response("User ID is required", { status: 400 });
    }

    const body = await req.json();
    const { property }: { property: IGetAllValueProperty } = body;

    const result = await sql`SELECT * FROM users WHERE id = ${userId}`;
    const users = result as IUser[];

    if (!users.length) {
      return new Response("Пользователь не найден", { status: 404 });
    }

    const user = users[0];

    if (user.quantitySetupPropert <= 0) {
      return new Response(
        JSON.stringify({ error: "Лимит добавлений исчерпан" }),
        { status: 403 }
      );
    }

    const updatedProperties = [...(user.properties || []), property];

    await sql`
      UPDATE users
      SET properties = ${JSON.stringify(updatedProperties)},
          quantitysetuppropert = quantitysetuppropert - 1
      WHERE id = ${userId}
    `;

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch  {
    console.error("Ошибка при обновлении пользователя:");
    return new Response("Ошибка сервера", { status: 500 });
  }
}
