"use client";
import { useState, useEffect } from "react";
import useUploadPreview from "../_components/useUploadPreview";

// นำเข้า components ที่สร้างใหม่
import PageHeader from "../_components/add-recipes/PageHeader";
import FormInput from "../_components/add-recipes/FormInput";
import ImageUploader from "../_components/add-recipes/ImageUploader";
import IngredientSelector from "../_components/add-recipes/IngredientSelector";
import SubmitButton from "../_components/add-recipes/SubmitButton";

export default function AddRec(){
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [ids, setIds] = useState("");
  const pic = useUploadPreview();

  const [list, setList] = useState([]);
  useEffect(() => { 
    fetch("/api/manage/ingredients")
      .then(r => {
        if (!r.ok) {
          throw new Error(`API returned ${r.status}: ${r.statusText}`);
        }
        return r.json();
      })
      .then(data => {
        setList(data || []);
      })
      .catch(error => {
        console.error("Error fetching ingredients:", error);
        setList([]); // Set empty array as fallback
      });
  }, []);

  async function submit(){
    if(!name.trim()) return alert("ชื่อเมนู?");
    const fd = new FormData();
    fd.append("name", name.trim());
    fd.append("description", desc);
    fd.append("ingredient_ids", ids);
    if(pic.file) fd.append("image", pic.file);
    await fetch("/api/manage/recipes", {method: "POST", body: fd});
    alert("Saved"); setName(""); setDesc(""); setIds(""); pic.reset();
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-xl">
      <PageHeader />
      
      <div className="space-y-6">
        <FormInput 
          label="ชื่อเมนูอาหาร" 
          placeholder="ระบุชื่อเมนูอาหาร" 
          value={name} 
          onChange={e => setName(e.target.value)} 
        />
        
        <FormInput 
          label="คำอธิบาย" 
          placeholder="รายละเอียดของเมนูอาหาร (วิธีทำ, เคล็ดลับ, ฯลฯ)" 
          value={desc} 
          onChange={e => setDesc(e.target.value)} 
          textarea={true}
        />
        
        <IngredientSelector 
          value={ids} 
          onChange={e => setIds(e.target.value)} 
          ingredientsList={list} 
        />
        
        <ImageUploader 
          previewUrl={pic.url} 
          onFileChange={pic.pick} 
        />
        
        <div className="text-center">
          <SubmitButton onClick={submit} />
        </div>
      </div>
    </div>
  );
}
