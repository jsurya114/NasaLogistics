import React,{useState} from "react";

function Login(){
    const [email,setEmail]=useState<string>("")
    const [password,setPassword]=useState<string>("")

    function handleSubmit(e:React.FormEvent<HTMLFormElement>):void{
        e.preventDefault()
        console.log('email',email)
        console.log('password',password)
        alert('login')
    }
    function handleEmailChange(e:React.ChangeEvent<HTMLInputElement>):void{
        setEmail(e.target.value)
    }

    function handlePasswordChange(e:React.ChangeEvent<HTMLInputElement>):void{
        setPassword(e.target.value)
    }

    return (
       <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
      

        <div className="flex justify-center mb-6">
          <img src="/images/logo.png" alt="Logo" className="w-40" />
        </div>

         <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
          Login
        </h2>



         <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-lg font-semibold hover:bg-purple-800 transition"
          >
            Login
          </button>
        </form>

    
            <div className="text-center mt-4">
          <a
            href="#"
            className="text-sm text-purple-700 hover:underline font-medium"
          >
            Forgot Password?
          </a>
        </div>





        </div>
      </div>
    )
}


export default Login