
import React from 'react'
import Data from '../data/Data';
import { Link } from "react-router-dom";
//Define the FruitCard component
function FruitCard({ fruit }) {
  return (
    <div className="group">
      <Link to={`/fruits/${fruit.id}`}>
        <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105">
          <img src={fruit.image} alt={fruit.name} className="w-full h-64 object-cover group-hover:opacity-75" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{fruit.name}</h3>
            <p className="text-gray-700">Calories: {fruit.nutrition.calories}</p>
            <p className="text-gray-700">Carbohydrates: {fruit.nutrition.carbohydrates}g</p>
            <p className="text-gray-700">Fiber: {fruit.nutrition.fiber}g</p>
          </div>
        </div>
      </Link>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
}
const FruitsPage = ({fruits}) => {
    return (
        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse Fruits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Data.map((fruit) => (
              <FruitCard key={fruit.id} fruit={fruit} />
            ))}
          </div>
        </div>
      );
      
}

export default FruitsPage
