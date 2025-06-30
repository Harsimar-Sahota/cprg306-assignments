'use client';

export default function Item({ name, quantity, category }) {
  return (
    <li className="p-2 my-1 bg-slate-700 rounded text-white">
      {name} - {quantity} ({category})
    </li>
  );
}
