"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "@/components/try/HeroSection";
import SearchIngredientsSection from "@/components/try/SearchIngredientsSection";
import ResultsSection from "@/components/try/ResultsSection";

export default function TryPage() {
  const [ingredients, setIngredients] = useState([]);
  const [selected, setSelected] = useState([]);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out',
    });

    fetch("/api/ingredients")
      .then(res => res.json())
      .then(data => setIngredients(data))
      .catch(err => console.error("Error fetching ingredients:", err));
  }, []);

  const filteredIngredients = ingredients.filter(ing => 
    ing.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = async () => {
    if (selected.length === 0) return;
  
    setIsLoading(true);
    setShowResults(false);
  
    try {
      const res = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients: selected })
      });
  
      const data = await res.json();
  
      const formatted = (data.menus || []).map((item, index) => {
        if (typeof item === "string") {
          return {
            id: item.replace(/\s/g, "-").toLowerCase(),
            name: item,
            description: "",
            image_url: ""
          };
        }
        return item;
      });
  
      setResults(formatted);
      setShowResults(true);
    } catch (error) {
      console.error("Error predicting recipes:", error);
      setResults([
        { id: "ไข่เจียว", name: "ไข่เจียว" },
        { id: "ไข่ผัดหอมใหญ่", name: "ไข่ผัดหอมใหญ่" },
        { id: "ไข่ดาว", name: "ไข่ดาว" },
        { id: "ไข่ตุ๋น", name: "ไข่ตุ๋น" }
      ]);
      setShowResults(true);
    } finally {
      setIsLoading(false);
    }
  };
  

  const toggleSelect = (name) => {
    setSelected(prev => prev.includes(name)
      ? prev.filter(item => item !== name)
      : [...prev, name]);
  };

  const handleResetResults = () => {
    setShowResults(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-kanit bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-4 md:p-8">
        {/* Use the extracted components, passing down needed props */}
        <HeroSection selected={selected} toggleSelect={toggleSelect} />
        
        <SearchIngredientsSection 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredIngredients={filteredIngredients}
          selected={selected}
          toggleSelect={toggleSelect}
          handleSearch={handleSearch}
          isLoading={isLoading}
        />
        
        {/* Conditionally render results section */}
        {showResults && (
          <ResultsSection 
            results={results} 
            selectedCount={selected.length}
            onReset={handleResetResults}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
}
