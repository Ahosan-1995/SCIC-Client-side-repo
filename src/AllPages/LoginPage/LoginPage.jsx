import { Link } from "react-router-dom";


const LoginPage = () => {

    const handleGoogleLogin = () => {

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Please Lonin Your Account
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                        <form className="card-body px-10">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="flex items-center pt-4 space-x-1 p-2">
                            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                            <p className="px-3 text-sm text-gray-700">Social Login</p>
                            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 hover:bg-blue-300 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                            </button>

                          
                        </div>
                        <p  className="text-xs text-center sm:px-6 text-black pb-5">Don't have an account?
                            <Link to={'/register'} className="underline text-sm text-blue-500"> Register Now</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;