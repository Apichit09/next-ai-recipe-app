import { db } from '@/lib/db';

export async function GET(_, context) {
  const { name } = await context.params;

  const [rows] = await db.query(`
    SELECT r.*, GROUP_CONCAT(i.name) AS ingredients
    FROM recipes r
    JOIN recipe_ingredients ri ON r.id = ri.recipe_id
    JOIN ingredients i ON i.id = ri.ingredient_id
    WHERE r.name = ?
    GROUP BY r.id
  `, [name]);

  if (!rows.length) {
    return new Response('Not found', { status: 404 });
  }

  const recipe = rows[0];

  return Response.json({
    name: recipe.name,
    description: recipe.description,
    image_url: recipe.image_url,
    ingredients: recipe.ingredients.split(',')
  });
}
