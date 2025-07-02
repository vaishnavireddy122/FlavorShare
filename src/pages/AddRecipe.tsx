import { useState } from "react";
import { db } from "../db/recipeDb.ts";
import { useNavigate } from "react-router-dom";

export default function AddRecipe() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [imgUrl, setImageUrl] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const id = await db.recipes.add({
      title,
      link,
      imgUrl,
      steps,
      ingredients: ingredients.split(",").map((ing) => ing.trim()),
      createdAt: new Date(),
    });

    navigate(`/recipe/${id}`);
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-orange-700">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Link"
          className="w-full p-2 border rounded"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          className="w-full p-2 border rounded"
          value={imgUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingredients (comma separated)"
          className="w-full p-2 border rounded"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <textarea
          placeholder="Steps"
          className="w-full p-2 border rounded"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
}
