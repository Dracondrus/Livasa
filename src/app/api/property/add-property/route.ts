import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userGmail, ...propertyData } = body; // ✅ Обрати внимание на userGmail с большой G

    // 🔽 Шаг 1: Получить setupplace из users по email
    const userData = await sql`
      SELECT setupplace FROM users WHERE email = ${userGmail}
    `;

    if (userData.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const setupPlace = userData[0].setupplace;

    if (setupPlace <= 0) {
      return NextResponse.json({ error: "No property slots left" }, { status: 403 });
    }

    // 🔽 Шаг 2: Вставить данные в таблицу properties
    await sql`
      INSERT INTO properties (
        usergmail,
        expirationdate,
        information,
        iainformation,
        idescription,
        amenities,
        images
      ) VALUES (
        ${userGmail},
        ${propertyData.expirationDate}, -- ✅ название поля как во фронте
        ${propertyData.information},
        ${propertyData.iAInformation},
        ${propertyData.iDescription},
        ${propertyData.amenities},
        ${propertyData.images}
      )
    `;

    // 🔽 Шаг 3: Уменьшить setupplace на 1
    await sql`
      UPDATE users
      SET setupplace = setupplace - 1
      WHERE email = ${userGmail}
    `;

    return NextResponse.json({ message: "Property added successfully" });
  } catch (error) {
    console.error("Error creating property:", error);
    return NextResponse.json({ error: "Failed to add property" }, { status: 500 });
  }
}
