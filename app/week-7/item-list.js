'use client';
import Item from './item';
import { useState } from 'react';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div className="mt-4">
      <div className="flex gap-4 mb-2">
        <button
          onClick={() => setSortBy('name')}
          className="bg-slate-600 px-4 py-1 rounded text-white"
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className="bg-slate-600 px-4 py-1 rounded text-white"
        >
          Sort by Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
