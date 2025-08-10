import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import cloudinary from '@/lib/cloudinary';
import { IGetAllValueProperty } from '@/app/[locale]/(dashboard)/dashboard/components/GetValues';

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const propertyId = params.id;

  if (!propertyId) {
    return NextResponse.json({ error: 'Invalid property id' }, { status: 400 });
  }

  try {
    // Найти пользователя с property.id = propertyId
    const users = await sql`
      SELECT id, properties
      FROM users
      WHERE properties @> jsonb_build_array(jsonb_build_object('id', ${propertyId}::text))
    `;

    if (users.length === 0) {
      return NextResponse.json({ error: 'Property not found' }, { status: 404 });
    }

    const user = users[0];
    const property = user.properties.find((p: any) => p.id === propertyId);

    if (!property) {
      return NextResponse.json({ error: 'Property not found' }, { status: 404 });
    }

    // Удалить картинки из Cloudinary
    if (property.images && property.images.length > 0) {
      for (const img of property.images) {
        try {
          await cloudinary.uploader.destroy(img.public_id);
        } catch (err) {
          console.error(`Failed to delete image ${img.public_id}`, err);
        }
      }
    }

    // Удалить property из массива
    const updatedProperties = user.properties.filter((p : IGetAllValueProperty) => p.id !== propertyId);

    // Обновить user.properties в базе
    await sql`
      UPDATE users
      SET properties = ${JSON.stringify(updatedProperties)}::jsonb
      WHERE id = ${user.id}
    `;

    return NextResponse.json({ message: 'Property deleted successfully' }, { status: 200 });

  } catch  {
   
    return NextResponse.json( { status: 500 });
  }
}
