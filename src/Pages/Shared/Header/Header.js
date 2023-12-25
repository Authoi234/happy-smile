import React, { useContext } from 'react';
import img from '../../../images/favicon.png';
import { AuthContext } from '../../../Context/AuthContextProvider/AuthContextProvider';

const Header = () => {
    const { user } = useContext(AuthContext)

    const navbarMenu = [
        <li key={1}><a href='/'>Home</a></li>,
        user ? <li key={2}></li> : <><li key={2}><a href='/Login'>Login</a></li><li key={3}><a href='/register'>Register</a></li></>
    ]

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-transparent backdrop-blur-lg shadow rounded-box w-52">
                        {
                            navbarMenu
                        }
                    </ul>
                </div>
                <img src={img} className='w-14' alt="" data-aos="fade-left" />
                <a href='/' className="btn btn-ghost text-xl" data-aos="fade-right"> Happy Smile</a>
            </div>
            <div className="navbar hidden lg:flex justify-start" data-aos="fade-left" data-aos-anchor-placement="top-bottom">
                <ul className="menu menu-horizontal px-1">
                    {
                        navbarMenu
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className='mask mask-circle tooltip tooltip-left' data-tip={user.displayName}>
                            <img className='rounded-full w-20 mx-2' src={user.photoURL} alt="" />
                        </div>
                    </> : ""
                }
                <a href='/' className="btn btn-neutral" data-aos="zoom-in">Button</a>
            </div>
        </div>
    );
};

export default Header;