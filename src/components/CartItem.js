import React from 'react'

const CartItem = ({fruit}) => {
    return (
        <div className="border border-gray-300 p-4 rounded-md shadow-md mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={fruit.image} alt={fruit.name} className="w-16 h-16 object-cover mr-4" />
              <div>
                <h2 className="text-lg font-semibold">{fruit.name}</h2>
                <p className="text-gray-600">Price: ${fruit.price}</p>
                <p className="text-gray-600">Quantity: {fruit.quantity}</p>
              </div>
            </div>
            <button className="text-red-500 font-semibold">Remove</button>
          </div>
        </div>
      );
}

export default CartItem
