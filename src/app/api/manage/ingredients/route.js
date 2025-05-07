import { db } from "@/lib/db";
import { writeFile } from "fs/promises";
import path from "path";

export async function GET() {
  const [rows] = await db.query("SELECT * FROM ingredients ORDER BY id DESC");
  return Response.json(rows);
}

export async function POST(req) {
  try {
    const contentType = req.headers.get("content-type") || "";
    
    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      const name = formData.get("name");
      
      const [existingRows] = await db.query(
        "SELECT id FROM ingredients WHERE name = ?", 
        [name]
      );
      
      if (existingRows.length > 0) {
        return new Response(JSON.stringify({ error: "ชื่อวัตถุดิบนี้มีอยู่ในระบบแล้ว" }), {
          status: 409,
          headers: { "Content-Type": "application/json" }
        });
      }
      
      let url = "";
      const image = formData.get("image");
      if (image && image.size > 0) {
        const buf = Buffer.from(await image.arrayBuffer());
        const ext = path.extname(image.name) || ".jpg";
        const fn  = `ing-${Date.now()}${ext}`;
        await writeFile(path.join(process.cwd(), "public", "images", fn), buf);
        url = `/images/${fn}`;
      }
      
      await db.query(
        "INSERT INTO ingredients (name, image_url) VALUES (?, ?)",
        [name, url]
      );
      
      return new Response(null, { status: 201 });
    } else {
      const { name, image_url = "" } = await req.json();
      
      const [existingRows] = await db.query(
        "SELECT id FROM ingredients WHERE name = ?", 
        [name]
      );
      
      if (existingRows.length > 0) {
        return new Response(JSON.stringify({ error: "ชื่อวัตถุดิบนี้มีอยู่ในระบบแล้ว" }), {
          status: 409,
          headers: { "Content-Type": "application/json" }
        });
      }
      
      await db.query(
        "INSERT INTO ingredients (name, image_url) VALUES (?, ?)",
        [name, image_url]
      );
      
      return new Response(null, { status: 201 });
    }
  } catch (error) {
    console.error("Error adding ingredient:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
