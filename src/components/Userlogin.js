import { useState } from "react"

// a component that creates user authenitication
//takes use of useState hook

const Userlogin = () => {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('')

    //implement login
    const handleLogin=()=>{
        console.log("Enter your details")
    }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">User Login</h1>
        <div className="mb-4">
            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="email">
                Email
            </label>
            <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your email"
            value={email}
            onChange={e=>{
                setEmail(e.target.value)
            }}/>
            <div className="mb-4">
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="password">
                    Password
                    <input
                    type="password"
                    id="password"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your password"
                    value={password}
                    onChange={e=>{
                        setPassword(e.target.value)
                    }}/>
                </label>
                <div>
                    <button className="bg-blue-500 text-white py-2  px-2 rounded hover:bg-blue-700" onClick={handleLogin}>
                        Log in
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Userlogin
