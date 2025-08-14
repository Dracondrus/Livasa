import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { IGetAllValueProperty } from "@/app/[locale]/(dashboard)/dashboard/components/GetValues";

export async function GET(
  req: Request,
  props: { params: Promise<{ id: string }> }
) {
  try {
    const { id: propertyId } = await props.params;

    if (!propertyId) {
      return NextResponse.json({ error: "Invalid property id" }, { status: 400 });
    }

    // Ищем пользователя, у которого есть этот property
    const users = await sql`
      SELECT properties
      FROM users
      WHERE properties @> jsonb_build_array(jsonb_build_object('id', ${propertyId}::text))
    `;

    if (users.length === 0) {
      return NextResponse.json({ error: "Property not found" }, { status: 404 });
    }

    const user = users[0];
    const property = user.properties.find((p: IGetAllValueProperty) => p.id === propertyId);

    if (!property) {
      return NextResponse.json({ error: "Property not found" }, { status: 404 });
    }

    return NextResponse.json(property, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
