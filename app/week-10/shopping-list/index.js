// week-10/shopping-list/index.js
"use client";
import { useEffect, useState } from "react";
import { fetchShoppingList } from "../_services/shopping-list";

export default function ShoppingList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchShoppingList();
      setItems(data);
    };

    loadData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">🛒 Shopping List</h1>
      <ul className="list-disc list-inside">
        {items.map(item => (
          <li key={item.id}>✅ {item.name}</li>
        ))}
      </ul>
    </div>
  );
}
