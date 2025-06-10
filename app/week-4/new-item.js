'use client';
import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg max-w-sm mx-auto text-center">
      <h2 className="text-xl font-semibold mb-4">Select Quantity</h2>
      
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded text-white ${quantity === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          -
        </button>

        <span className="text-lg font-medium">{quantity}</span>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded text-white ${quantity === 20 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          +
        </button>
      </div>

      <p className="text-sm text-gray-500 mt-2">Min: 1, Max: 20</p>
    </div>
  );
}
