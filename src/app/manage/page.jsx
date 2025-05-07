"use client";
import { useEffect, useState } from "react";
import PageHeader from "./_components/manage/PageHeader";
import ActionLinks from "./_components/manage/ActionLinks";
import IngredientsTable from "./_components/manage/IngredientsTable";
import RecipesTable from "./_components/manage/RecipesTable";
import LoadingState from "./_components/manage/LoadingState";

export default function Manage() {
  /* ---------- state ------------------------------------------------ */
  const [ingredients, setIngredients]   = useState([]);
  const [recipes,     setRecipes]       = useState([]);
  const [rel,         setRel]           = useState([]);   // mapping table
  const [loading,     setLoading]       = useState(true);

  /* ---------- load data (สาม endpoint พร้อมกัน) ------------------- */
  useEffect(() => {
    Promise.all([
      fetch("/api/manage/ingredients").then(r => r.json()),
      fetch("/api/manage/recipes").then(r => r.json()),
      fetch("/api/manage/recipe-ingredients").then(r => r.json())
    ]).then(([ing, rec, map]) => {
      setIngredients(ing);
      setRecipes(rec);
      setRel(map);                 // [{id, recipe, ingredient}]
    }).finally(() => setLoading(false));
  }, []);

  /* ---------- quick delete (refetch หลังลบ) ----------------------- */
  async function del(path, id) {
    try {
      const response = await fetch(`/api/manage/${path}/${id}`, { method: "DELETE" });

      // ตรวจสอบการตอบกลับจาก API
      if (response.ok) {
        // ลบข้อมูลออกจาก state
        if (path === "ingredients") {
          setIngredients(prev => prev.filter(item => item.id !== id));
        } else if (path === "recipes") {
          setRecipes(prev => prev.filter(item => item.id !== id));
        }
      } else {
        console.error("Failed to delete", id, response);
      }
    } catch (error) {
      console.error("Error deleting", error);
    }
  }

  /* ---------- helper: หา ingredient list ของเมนู ------------------ */
  function ingredientsOf(recipeName) {
    const names = rel
      .filter(m => m.recipe === recipeName)
      .map(m => m.ingredient);
    return names.join(", ");
  }

  /* ---------- loading state --------------------------------------- */
  if (loading) {
    return <LoadingState />;
  }

  /* ---------- UI --------------------------------------------------- */
  return (
    <div className="p-6 max-w-6xl mx-auto font-kanit bg-gray-50 min-h-screen">
      <PageHeader />
      <ActionLinks />

      <IngredientsTable 
        ingredients={ingredients} 
        onDelete={del}
      />
      
      <RecipesTable 
        recipes={recipes} 
        getIngredients={ingredientsOf} 
        onDelete={del}
      />
    </div>
  );
}
