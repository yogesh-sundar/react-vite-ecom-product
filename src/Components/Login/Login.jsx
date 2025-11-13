import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const handleLogin = ()=>{
        navigate('/products');
    }

    return (
        <div className="flex items-start justify-start sm:items-center sm:justify-center">
            <div className="w-full sm:w-[80%] md:w-[45%] shadow-lg p-2 rounded mt-10 bg-gray-100">
                <h1 className="font-bold text-xl">Login to Your Account</h1>
                <div className="mt-4 px-4 flex flex-col gap-1 items-start justify-center">
                    <div className="font-normal text-md ">
                        <label htmlFor="email">Email<span className="text-red-500">*</span>:</label>
                    </div>
                    <div className="w-full">
                        <input
                            className="w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
                            type="email"
                            id="email"
                            name="email"
                            required
                            />
                    </div>
                </div>
                <div className="mt-4 px-4 flex flex-col gap-1 items-start justify-center">
                    <div className="font-normal text-md ">
                        <label htmlFor="password">Password<span className="text-red-500">*</span>:</label>
                    </div>
                    <div className="w-full">
                        <input
                            className="w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
                            type="password"
                            id="password"
                            name="password"
                            required
                            />
                    </div>
                </div>
                <div className="mt-4 px-4">
                    <button
                    className="cursor-pointer w-full bg-blue-400 text-white p-2 rounded hover:bg-blue-500"
                    onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
                <div className="mt-2 px-4 text-sm">
                    <p>Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link></p>
                </div>
            </div>
        </div>
    )
}