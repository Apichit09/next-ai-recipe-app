"use client";
import { useState } from "react";
import useUploadPreview from "../_components/useUploadPreview";

import PageHeader from "../_components/add-ingredients/PageHeader";
import IngredientNameInput from "../_components/add-ingredients/IngredientNameInput";
import ImageUploader from "../_components/add-ingredients/ImageUploader";
import SubmitButton from "../_components/add-ingredients/SubmitButton";

export default function AddIng(){
  const [name,setName]=useState("");
  const pic = useUploadPreview();

  async function submit(){
    if(!name.trim()) return alert("ชื่อ?");
    const fd=new FormData(); fd.append("name",name.trim());
    if(pic.file) fd.append("image",pic.file);
    await fetch("/api/manage/ingredients",{method:"POST",body:fd});
    alert("OK"); setName(""); pic.reset();
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-xl">
      <PageHeader />
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <IngredientNameInput 
          value={name}
          onChange={e => setName(e.target.value)}
        />
        
        <ImageUploader
          previewUrl={pic.url}
          onFileChange={pic.pick}
        />
        
        <div className="mt-8 text-center">
          <SubmitButton 
            onClick={submit}
            isDisabled={!name.trim()}
          />
        </div>
      </div>
    </div>
  );
}
