import { AuthDataValidator } from "@telegram-auth/server";
import { urlStrToAuthDataMap } from "@telegram-auth/server/utils";
import { NextRequest, NextResponse } from "next/server";

const BOT_TOKEN = "8298404421:AAERWAQFvxZBMNs14GYRvoxek9Nf6L1fngA";

export async function GET(req: NextRequest) {
  try {
    const validator = new AuthDataValidator({ botToken: BOT_TOKEN });

    // Конвертируем URL в map
    const data = urlStrToAuthDataMap(req.url);

    // Проверяем данные и получаем юзера
    const user = await validator.validate(data);

    return NextResponse.json({ message: "Authorized", user });
  } catch (error) {
    console.error("Ошибка Telegram авторизации:", error);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
