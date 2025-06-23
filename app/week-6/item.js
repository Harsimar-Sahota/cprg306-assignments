"use client";

export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-2 my-2 rounded shadow-sm">
      <span className="font-semibold">{name}</span> — {quantity} pcs ({category})
    </li>
  );
}
