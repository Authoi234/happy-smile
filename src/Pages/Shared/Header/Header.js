import React from 'react';
import img from '../../../images/favicon.png';

const Header = () => {
    const navbarMenu = [
        <li><a href='/'>Home</a></li>,
        <li><a href='/Login'>Login</a></li>
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
                <img src={img} className='w-14' alt="" data-aos="fade-left"/>
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
                <a href='/' className="btn btn-neutral" data-aos="zoom-in">Button</a>
            </div>
        </div>
    );
};

export default Header;