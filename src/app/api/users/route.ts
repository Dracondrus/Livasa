import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export async function POST(req: Request) {
  const { name, email } = await req.json();

  try {
    await sql`
      INSERT INTO users (name, email)
      VALUES (${name}, ${email});
    `;
    return Response.json({ message: 'User created' });
  } catch (err) {
    return Response.json({ error: 'User already exists or error' }, { status: 400 });
  }
}

export async function GET() {
  const users = await sql`SELECT * FROM users;`;
  return Response.json(users);
}
