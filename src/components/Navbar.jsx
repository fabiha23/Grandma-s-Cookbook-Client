import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const [open, setOpen] = useState(false)

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
    </>
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
                <div className='flex'>
                    <button>Toggle</button>
                    <span onClick={() => setOpen(!open)}>{
                        open ? <RxCross2 size={32} /> : <IoMenu size={32} className='xl:hidden' />
                    }
                    </span>
                </div>
            </div>
            <ul className={`px-8 space-y-6 text-lg font-medium text-gray-600 w-1/2 bg-transparent top-0 py-6 backdrop-blur-lg xl:hidden  absolute ${open ? 'left-0' : '-left-130 '} duration-1000`}>
                {links}
            </ul>
        </nav>
    );
};

export default Navbar;