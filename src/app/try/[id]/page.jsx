"use client";
import { useState, useEffect, use } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

// Import UI components
import LoadingSpinner from "@/components/try/id/LoadingSpinner";
import BackButton from "@/components/try/id/BackButton";
import RecipeDetail from "@/components/try/id/RecipeDetail";

export default function RecipeDetailPage({ params }) {
  // Unwrap params using React.use()
  const unwrappedParams = use(params);
  const recipeId = unwrappedParams.id;
  
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });

    // Fetch recipe data
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/recipes/${recipeId}`);
        if (!res.ok) throw new Error('Failed to fetch recipe');
        const data = await res.json();
        setRecipe(data);
      } catch (error) {
        console.error('Error:', error);
        // Fallback to using the ID as the recipe name if API fails
        setRecipe({
          name: recipeId,
          description: "รายละเอียดเมนูอาหารนี้",
          ingredients: ["ไม่พบข้อมูลวัตถุดิบ"]
        });
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  // Handle external searches
  const searchGoogle = () => {
    const query = encodeURIComponent(`วิธีทำ ${recipe?.name}`);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };

  const searchYoutube = () => {
    const query = encodeURIComponent(`วิธีทำ ${recipe?.name}`);
    window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!recipe) return notFound();

  return (
    <div className="min-h-screen flex flex-col font-kanit bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <main className="container mx-auto p-4 md:p-8 flex-grow">
        <BackButton />
        
        <RecipeDetail 
          recipe={recipe}
          onSearchGoogle={searchGoogle}
          onSearchYoutube={searchYoutube}
        />
      </main>
      
      <Footer />
    </div>
  );
}
