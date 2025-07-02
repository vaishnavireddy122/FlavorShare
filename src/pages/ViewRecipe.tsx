import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db, type Recipe } from "../db/recipeDb";

export default function ViewRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (!id) return;

    db.recipes
      .get(Number(id))
      .then((data) => {
        setRecipe(data ?? null);
      })
      .catch(console.error);
  }, [id]);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this recipe?"
    );
    if (!confirmed || !id) return;

    await db.recipes.delete(Number(id));
    navigate("/");
  };

  if (recipe === null) return <p className="p-4">Recipe not found.</p>;

  return (
    <div className="p-6 space-y-2">
      <h2 className="text-2xl font-bold">{recipe.title}</h2>
      <img
        src={recipe.imgUrl || "https://via.placeholder.com/300x200"}
        alt={recipe.title}
        className="w-60 rounded"
      />
      <p>
        <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
      </p>
      <p>
        <strong>Steps:</strong> {recipe.steps}
      </p>
      <a
        href={recipe.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Original Recipe Link
      </a>

      <button
        onClick={handleDelete}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        🗑️ Delete Recipe
      </button>
    </div>
  );
}
