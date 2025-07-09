"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import items from "./items.json";

export default function Page() {
  const [itemList, setItemList] = useState(items);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItemList([...itemList, newItem]);
  }

  function handleItemSelect(item) {
    let cleanedName = item.name.split(",")[0].trim();
    cleanedName = cleanedName.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uFE0F|\u200D)/g,
      ""
    );
    setSelectedItemName(cleanedName);
  }

  return (
    <main className="flex gap-4">
      <div className="w-1/2">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={itemList} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
