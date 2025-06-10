export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-white p-4 rounded shadow mb-2">
      <p className="font-bold text-lg">{name}</p>
      <p className="text-sm">Quantity: {quantity}</p>
      <p className="text-sm text-gray-600">Category: {category}</p>
    </li>
  );
}
