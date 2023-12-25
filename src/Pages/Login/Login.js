import React, { useState } from 'react';
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";

const Login = () => {
    const [clicked, setClicked] = useState(false);
    const [inputType ,setInputType] = useState('password')
    const [icon, setIcon] = useState(<FaEyeSlash></FaEyeSlash>)

    const handleLogin = () => {
        
    }

    const handlePasswordVisible = () => {
        if (!clicked) {
            setClicked(true);
            setIcon(<FaEye></FaEye>);
            setInputType('text');
        }
        else{
            setClicked(false);
            setIcon(<FaEyeSlash></FaEyeSlash>);
            setInputType('password');
        }
    }

    return (
        <div className="hero bg-base-200 py-5" onSubmit={handleLogin}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-2/5">
                    <h1 className="text-5xl font-bold text-white">Welcome Back!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 shadow-2xl bg-base-100 w-2/5">
                <h1 className="text-5xl font-bold text-white">Login</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered text-green-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='flex items-center justify-center'>
                            <input type={inputType} placeholder="password" className="input input-bordered border-r-0 text-red-300 w-full" required /><span onClick={handlePasswordVisible} className='border border-l-0 p-3 border-gray-700'>{icon}</span>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white" type='submit '>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;