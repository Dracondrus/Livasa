import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { IGetAllValueProperty } from '@/app/[locale]/(dashboard)/dashboard/components/GetValues';

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const propertyId = params.id;
  const { permission, review } = await req.json();

  if (!propertyId) {
    return NextResponse.json({ error: 'Invalid property id' }, { status: 400 });
  }

  try {
    // Находим юзера с этим property
    const users = await sql`
      SELECT id, properties
      FROM users
      WHERE properties @> jsonb_build_array(jsonb_build_object('id', ${propertyId}::text))
    `;

    if (users.length === 0) {
      return NextResponse.json({ error: 'Property not found' }, { status: 404 });
    }

    const user = users[0];
    const updatedProperties = user.properties.map((p: IGetAllValueProperty) => {
      if (p.id === propertyId) {
        return {
          ...p,
          permission,
          review
        };
      }
      return p;
    });

    // Обновляем массив в базе
    await sql`
      UPDATE users
      SET properties = ${JSON.stringify(updatedProperties)}::jsonb
      WHERE id = ${user.id}
    `;

    return NextResponse.json({ message: 'Property updated successfully' }, { status: 200 });
  } catch  {
   
    return NextResponse.json( { status: 500 });
  }
}
