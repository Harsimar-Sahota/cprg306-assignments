'use client';
import { useState } from 'react';
import itemsData from './items.json';
import ItemList from './item-list';
import NewItem from './new-item';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main className="p-4">
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
