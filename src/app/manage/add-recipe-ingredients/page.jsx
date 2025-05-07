"use client";
import { useEffect, useState } from "react";
import { MdRestaurantMenu, MdRestaurant } from 'react-icons/md';

// นำเข้า components ที่สร้างใหม่
import PageHeader from "../_components/add-recipe-ingredients/PageHeader";
import SelectBox from "../_components/add-recipe-ingredients/SelectBox";
import RelationshipVisualizer from "../_components/add-recipe-ingredients/RelationshipVisualizer";
import SaveButton from "../_components/add-recipe-ingredients/SaveButton";

export default function MapPage() {
  const [recipes, setR] = useState([]);
  const [ings, setI] = useState([]);
  const [rec, setRec] = useState("");
  const [ing, setIng] = useState("");

  useEffect(() => {
    fetch("/api/manage/recipes").then(r => r.json()).then(setR);
    fetch("/api/manage/ingredients").then(r => r.json()).then(setI);
  }, []);

  async function save() {
    await fetch("/api/manage/recipe-ingredients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipe_id: rec, ingredient_id: ing })
    });
    alert("mapped");
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-xl">
      <PageHeader />
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
        <SelectBox 
          label="เลือกเมนูอาหาร" 
          value={rec} 
          onChange={e => setRec(e.target.value)} 
          options={recipes} 
          icon={<MdRestaurantMenu className="text-purple-500" />}
          placeholder="-- เลือกเมนู --"
        />
        
        <SelectBox 
          label="เลือกวัตถุดิบ" 
          value={ing} 
          onChange={e => setIng(e.target.value)} 
          options={ings} 
          icon={<MdRestaurant className="text-blue-500" />}
          placeholder="-- เลือกวัตถุดิบ --"
        />
        
        <RelationshipVisualizer 
          recipeId={rec} 
          recipesList={recipes} 
          ingredientId={ing} 
          ingredientsList={ings}
        />
      </div>
      
      <SaveButton 
        onClick={save} 
        disabled={!rec || !ing}
      />
    </div>
  );
}
