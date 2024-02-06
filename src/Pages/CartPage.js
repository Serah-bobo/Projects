import React from 'react'
import Data from '../data/Data';
import CartItem from '../components/CartItem';
const CartPage = ({cart}) => {
    return (
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Data.map((fruit) => (
                <CartItem key={fruit.id} fruit={fruit} />
              ))}
            </div>
          )}
        </div>
      );
}

export default CartPage
                                                        