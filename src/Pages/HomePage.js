import React from 'react'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
<div className="bg-gradient-to-b from-green-400 to-blue-500 min-h-screen text-white">
      <div className="container mx-auto flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Welcome to our Fruit Shop!</h1>
        <p className="text-lg mb-8 text-center">Discover fresh and delicious fruits for a healthy lifestyle.</p>
        <div className="flex justify-center">
          <Link to="/fruits" className="bg-white text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-gray-200 mr-4">Browse Fruits</Link>
          <Link to="/cart" className="bg-white text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-gray-200">View Cart</Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
