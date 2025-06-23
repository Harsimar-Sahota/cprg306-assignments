"use client";
import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  let content;

  if (sortBy === "group") {
    const grouped = itemsData.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {});
    const sortedCategories = Object.keys(grouped).sort();

    content = sortedCategories.map((category) => (
      <div key={category}>
        <h2 className="text-lg font-semibold capitalize mt-4 mb-2">{category}</h2>
        <ul>
          {grouped[category]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => (
              <Item key={item.id} {...item} />
            ))}
        </ul>
      </div>
    ));
  } else {
    const sortedItems = [...itemsData].sort((a, b) =>
      a[sortBy].localeCompare(b[sortBy])
    );
    content = (
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    );
  }

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className={`px-3 py-1 rounded ${
            sortBy === "group" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Group by Category
        </button>
      </div>
      {content}
    </div>
  );
}
