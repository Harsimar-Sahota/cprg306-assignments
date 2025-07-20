// app/week-10/ShoppingList.js
"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export default function ShoppingList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "shoppingList"));
      const fetchedItems = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setItems(fetchedItems);
    };

    fetchData();
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
