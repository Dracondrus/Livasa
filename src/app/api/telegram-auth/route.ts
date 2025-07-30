// app/api/telegram-auth/route.ts
import { NextRequest, NextResponse } from "next/server";
import { AuthDataValidator } from "@telegram-auth/server";
import { urlStrToAuthDataMap } from "@telegram-auth/server/utils";

// ⚠️ Лучше через process.env, но пока напрямую
const BOT_TOKEN = "8298404421:AAERWAQFvxZBMNs14GYRvoxek9Nf6L1fngA";

export async function GET(req: NextRequest) {
  try {
    const validator = new AuthDataValidator({ botToken: BOT_TOKEN });

    // Парсим query-параметры из URL
    const data = urlStrToAuthDataMap(req.url);

    // Проверяем подпись Telegram
    const user = await validator.validate(data);

    return NextResponse.json({ message: "Authorized", user });
  } catch (error) {
    console.error("Ошибка авторизации:", error);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
