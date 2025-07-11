import React, { use, useEffect, useState } from 'react';
import { IoMenu, IoMoonOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { Link, NavLink } from 'react-router';
import { AuthDataContext } from '../Contexts/AuthDataContext';
import { TbLogout2 } from 'react-icons/tb';
import { FiSun } from 'react-icons/fi';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [openUser, setOpenUser] = useState(false)
    const { user, signOutUser } = use(AuthDataContext)
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    //     if (loading) {
    //     return <div className='text-center py-5'>Loading...</div>; // or your spinner
    // }

    const links = <>
        <li>
            <NavLink className={({ isActive }) =>
                `mr-3 ${isActive ? 'text-primary' : 'text-accent hover:text-primary'}`
            } to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) =>
                `mr-3 ${isActive ? 'text-primary' : 'text-accent hover:text-primary'}`
            } to='/all-recipe'>All Recipes</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) =>
                `mr-3 ${isActive ? 'text-primary' : 'text-accent hover:text-primary'}`
            } to='/add-recipe'>Add Recipe</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) =>
                `mr-3 ${isActive ? 'text-primary' : 'text-accent hover:text-primary'}`
            } to='/my-recipe'>My Recipes</NavLink>
        </li>
        {user ? (<></>) : (
            <>
                <li>
                    <NavLink className={({ isActive }) =>
                        `mr-3 ${isActive ? 'text-primary' : 'text-accent hover:text-primary'}`
                    } to='/login'>Login</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        `mr-3 ${isActive ? 'text-primary' : 'text-accent hover:text-primary'}`
                    } to='/register'>Register</NavLink>
                </li>
            </>)
        }
    </>

    const handleSignOut = () => {
        signOutUser()
            .then(() => console.log('sign out hoise'))
            .catch(error => console.log(error))
    }
    return (
        <nav>
            <div className='flex justify-between py-6 items-center'>
                <div>
                    <Link to='/'>
                        <h1 className='text-accent sm:text-2xl text-xl font-bold'>Grandma's Cookbook</h1>
                    </Link>
                </div>
                <div>
                    <ul className='hidden xl:flex gap-8 text-lg font-medium'>
                        {links}
                    </ul>
                </div>
                <div className='flex gap-2 items-center'>
                    <label className="swap swap-rotate">
                        <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />

                        {/* Sun icon (light mode) */}
                        <FiSun className="swap-on w-6 h-6" />

                        {/* Moon icon (dark mode) */}
                        <IoMoonOutline className="swap-off sm:w-7 sm:h-7 w-6 h-6" />
                    </label>
                    {user &&
                        <div className='relative'>
                            <img onClick={() => setOpenUser(!openUser)} className='w-7 h-7 lg:w-8 lg:h-8 object-cover rounded-full cursor-pointer' src={user.photoURL} alt="User" />
                            {openUser && (
                                <div className="absolute right-0 mt-2 bg-base-100 p-3 shadow rounded z-50 text-accent text-lg border-2 border-[#D9CFC1] w-50 space-y-1">
                                    <p className='font-medium'>{user.displayName}</p>
                                    <button className='flex items-center gap-2 bg-base-00 border-2 border-[#D9CFC1] p-1 px-3 shadow-sm rounded-sm cursor-pointer font-medium' onClick={handleSignOut}><TbLogout2 />
                                        Logout</button>
                                </div>
                            )}
                        </div>
                    }
                    <span onClick={() => setOpen(!open)}>{
                        open ? <RxCross2 size={32} /> : <IoMenu size={32} className='xl:hidden' />
                    }
                    </span>
                </div>
            </div>
            <ul className={`px-8 space-y-7 text-xl font-semibold text-gray-600 md:w-1/2 h-screen lg:w-1/3 w-2/3 bg-transparent top-0 py-10 backdrop-blur-xl xl:hidden absolute ${open ? 'left-0' : '-left-180 '} duration-1000`}>
                {links}
            </ul>
        </nav>
    );
};

export default Navbar;