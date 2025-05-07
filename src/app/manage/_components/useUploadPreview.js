/* src/app/manage/_components/useUploadPreview.js */
"use client";
import { useState } from "react";
export default function useUploadPreview(){
  const [file,setFile]=useState(null);
  const [url,setUrl]=useState(null);
  const pick=e=>{
    const f=e.target.files[0];
    if(f){ setFile(f); setUrl(URL.createObjectURL(f)); }
  };
  const reset=()=>{ setFile(null); setUrl(null); };
  return {file,url,pick,reset};
}
