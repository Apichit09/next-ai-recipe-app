import { db } from "@/lib/db";
export async function DELETE(_, { params }) {
  const id=params.id;
  await db.query("DELETE FROM recipe_ingredients WHERE recipe_id=?", [id]);
  await db.query("DELETE FROM recipes WHERE id=?", [id]);
  return new Response(null,{status:204});
}
