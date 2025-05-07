import { db } from "@/lib/db";

/* รายการ map ทั้งหมด */
export async function GET() {
  const [rows] = await db.query(`
    SELECT ri.id, r.name AS recipe, i.name AS ingredient
    FROM recipe_ingredients ri
    JOIN recipes r ON r.id = ri.recipe_id
    JOIN ingredients i ON i.id = ri.ingredient_id
    ORDER BY ri.id DESC
  `);
  return Response.json(rows);
}

/* POST { recipe_id, ingredient_id } */
export async function POST(req) {
  const { recipe_id, ingredient_id } = await req.json();
  await db.query(
    "INSERT INTO recipe_ingredients (recipe_id,ingredient_id) VALUES (?,?)",
    [recipe_id, ingredient_id]
  );
  return new Response(null,{status:201});
}
