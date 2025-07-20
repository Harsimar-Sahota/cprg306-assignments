// app/week-9/shopping-list/page.js
"use client";

import { useAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ShoppingListPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
  }, [user, router]);

  const handleAddItem = () => {
    const newItem = prompt("Enter an item:");
    if (newItem) {
      setItems((prevItems) => [...prevItems, newItem]);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 py-10 bg-white text-black">
      <h1 className="text-2xl font-bold">🛍️ Your Shopping List</h1>
      <p className="text-lg">Logged in as <strong>{user?.displayName}</strong></p>

      <div className="flex flex-col items-center gap-3">
        <button
          onClick={handleAddItem}
          className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          ➕ Add Item
        </button>

        <ul className="mt-4 space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 border rounded bg-gray-100 text-left w-64"
            >
              {item}
            </li>
          ))}
        </ul>

        <button
          onClick={() => router.push("/week-9")}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ⬅️ Back to Login Page
        </button>

        <button
          onClick={logout}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          🚪 Log Out
        </button>
      </div>
    </main>
  );
}
