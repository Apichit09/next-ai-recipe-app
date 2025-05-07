import { db } from '@/lib/db';

export async function GET() {
  try {
    await db.query("SELECT 1");
    const [rows] = await db.query("SELECT * FROM ingredients");
    return Response.json(rows);
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    return new Response(error.message, { status: 500 });
  }
}
