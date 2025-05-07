import { db } from "@/lib/db";
export async function DELETE(_, { params }) {
  await db.query("DELETE FROM recipe_ingredients WHERE id=?", [params.id]);
  return new Response(null,{status:204});
}
