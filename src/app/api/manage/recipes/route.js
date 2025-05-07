import { db } from "@/lib/db";
import { writeFile } from "fs/promises";
import path from "path";

export async function GET() {
  const [rows] = await db.query("SELECT * FROM recipes ORDER BY id DESC");
  return Response.json(rows);
}

/* body multipart:
   name, description, ingredient_ids (comma), image(file)
*/
export async function POST(req) {
  const c = req.headers.get("content-type")||"";
  if (!c.includes("multipart/form-data"))
    return new Response("multipart only",{status:400});

  const f = await req.formData();
  const name = f.get("name")?.toString().trim();
  if (!name) return new Response("name required",{status:400});
  const desc = f.get("description")?.toString()||"";
  const ids  = f.get("ingredient_ids")?.toString()||"";

  let url="";
  const img = f.get("image");
  if (img && typeof img==="object"){
    const buf=Buffer.from(await img.arrayBuffer());
    const ext=path.extname(img.name)||".jpg";
    const fn=`rec-${Date.now()}${ext}`;
    await writeFile(path.join(process.cwd(),"public","images",fn),buf);
    url=`/images/${fn}`;
  }

  const [{insertId}] = await db.query(
    "INSERT INTO recipes (name,description,image_url) VALUES (?,?,?)",
    [name,desc,url]
  );

  for (const id of ids.split(",").map(s=>Number(s.trim())).filter(Boolean)){
    await db.query(
      "INSERT INTO recipe_ingredients (recipe_id,ingredient_id) VALUES (?,?)",
      [insertId,id]
    );
  }
  return new Response(null,{status:201});
}
