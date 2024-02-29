import React from 'react'
import {  useForm } from 'react-hook-form'
import {useState} from 'react'

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm(); // Destructuring reset function
    const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  
    const onSubmit = (data) => {
      console.log(data);
      reset(); // Reset the form after successful submission
    };
  
    return (
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input {...register("username", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="username" placeholder="Username" />
            {errors.username && <p className="text-red-500 text-xs italic">Username is required</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input {...register("password", { required: true, minLength:5, maxLength:12})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              type={showPassword ? "text" : "password"} 
              id="password"
               placeholder="Password" />
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="absolute top-0 right-0 mt-3 mr-4"
              />
            </div>
            {errors.password && <p className="text-red-500 text-xs italic">Password should be between 5 and 12 characters</p>}
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
}

export default LoginForm
