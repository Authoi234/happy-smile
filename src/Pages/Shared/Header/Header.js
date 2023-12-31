import React, { useContext } from 'react';
import img from '../../../images/favicon.png';
import { AuthContext } from '../../../Context/AuthContextProvider/AuthContextProvider';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    //  the menu of navbar
    const navbarMenu = [
        <li key={1}><Link to='/'>Home</Link></li>,
        <li key={2}><Link to='/blog'>Blog</Link></li>,
        user ? <>
        <li key={2}><Link to='/myReviews'>My Reviews</Link></li>
        <li key={3}><Link to='/addServices'>Add Services</Link></li>
        </> :
         <><li key={2}><Link to='/Login'>Login</Link></li><li key={3}><Link to='/register'>Register</Link></li></>
    ];

    // handling log out
    const handleLogOut = () => {
        logout()
        .then(() => {})
        .catch(err => console.log(err))
    };

    return (
        <div className="navbar">
             <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    {/* navbar menu in mobile */}
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-transparent backdrop-blur-lg shadow rounded-box w-52">
                        {
                            navbarMenu
                        }
                    </ul>
                </div>
                {/* navbar logo */}
                <img src={img} className='w-14' alt="" data-aos="fade-left" />
                <a href='/' className="btn btn-ghost text-xl" data-aos="fade-right"> Happy Smile</a>
            </div>
            <div className="navbar disply-flex justify-start" data-aos="fade-left" data-aos-anchor-placement="top-bottom">
                {/* navbar menu in mobile */}
                <ul className="menu menu-horizontal px-1">
                    {
                        navbarMenu
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                       <div className="tooltip tooltip-left flex items-center mx-3" data-tip={user.displayName}>
                            {
                               <img className='mask mask-circle mx-2 w-14' src={user.photoURL} alt="" /> 
                            }
                            <button className='btn btn-outline btn-primary' onClick={handleLogOut}>LogOut</button>
                        </div>
                    </> : ""
                }
            </div>
        </div>
    );
};

export default Header;