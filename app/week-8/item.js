export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="border p-2 mb-2 rounded cursor-pointer hover:bg-gray-100"
      onClick={() => onSelect({ name, quantity, category })}
    >
      <span className="font-bold">{name}</span> — {quantity} ({category})
    </li>
  );
}
