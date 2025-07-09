"use client";
import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await res.json();
      return data.meals || [];
    } catch (err) {
      console.error("Error fetching meals:", err);
      return [];
    }
  }

  async function loadMealIdeas() {
    if (!ingredient) return;
    const ideas = await fetchMealIdeas(ingredient);
    setMeals(ideas);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">
        Meal ideas with:{" "}
        <span className="text-green-600">{ingredient || "..."}</span>
      </h2>
      <ul className="space-y-2">
        {meals.length === 0 && <li>No ideas found.</li>}
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="border p-2 rounded shadow-sm hover:bg-gray-50"
          >
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}
