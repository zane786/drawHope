import React from 'react';
import { useCart } from '../context/CartContext';

const cards = [
  {
    id: 1,
    title: "Rainbow Hope",
    artist: "Maria, age 8",
    image: "https://i.imgur.com/4qz6jVk.png",
    price: 25
  },
  {
    id: 2,
    title: "Butterfly Dreams",
    artist: "Carlos, age 10",
    image: "https://i.imgur.com/m2n0AgI.png",
    price: 25
  },
  {
    id: 3,
    title: "Happy World",
    artist: "Sarah, age 7",
    image: "https://i.imgur.com/bG0k9mP.png",
    price: 25
  },
  {
    id: 4,
    title: "Garden of Joy",
    artist: "Ahmed, age 9",
    image: "https://i.imgur.com/u73msjq.png",
    price: 25
  },
  {
    id: 5,
    title: "Ocean Friends",
    artist: "Emma, age 6",
    image: "https://i.imgur.com/AznxtTB.png",
    price: 25
  },
  {
    id: 6,
    title: "Space Adventure",
    artist: "Lucas, age 11",
    image: "https://i.imgur.com/Ogg4eLq.png",
    price: 25
  },
  {
    id: 7,
    title: "Forest Magic",
    artist: "Sofia, age 9",
    image: "https://i.imgur.com/kxiTS05.png",
    price: 25
  },
  {
    id: 8,
    title: "Dancing Stars",
    artist: "Miguel, age 8",
    image: "https://i.imgur.com/E6TGW8B.png",
    price: 25
  }
];

interface CardGridProps {
  limit?: number;
}

function CardGrid({ limit }: CardGridProps) {
  const { addToCart } = useCart();
  const displayCards = limit ? cards.slice(0, limit) : cards;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {displayCards.map((card) => (
        <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
            <p className="text-gray-600 text-sm mb-2">Drawn by {card.artist}</p>
            <div className="flex justify-between items-center">
              <span className="text-rose-500 font-semibold">${card.price}</span>
              <button 
                onClick={() => addToCart(card)}
                className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition text-sm"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardGrid;