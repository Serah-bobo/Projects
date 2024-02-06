import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
       <nav className='bg-gray-800 p-4'>
        <div className='container mx-auto'>
            <Link to='/' className='text-white font-bold'>Home</Link>
            <Link to='/fruits' className='text-white font-bold ml-4'>About</Link>
            <Link to='/cart' className='text-white font-bold ml-4'>Cart</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
