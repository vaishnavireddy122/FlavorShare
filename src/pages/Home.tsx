import { useEffect, useState } from "react";
import { db, type Recipe } from "../db/recipeDb";
import { Link } from "react-router-dom";

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    db.recipes.toArray().then(setRecipes).catch(console.error);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-orange-700">
        🍳 Flavorshare
      </h1>

      <Link
        to="/add"
        className="inline-block mb-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        ➕ Add New Recipe
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={recipe.imgUrl}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {recipe.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>

      {recipes.length === 0 && (
        <p className="mt-6 text-gray-500">
          No recipes yet. Add one to get started!
        </p>
      )}
    </div>
  );
}
