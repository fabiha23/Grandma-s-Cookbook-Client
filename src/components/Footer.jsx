import React from 'react';
import { CgMail } from 'react-icons/cg';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router';


const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal p-10 text-base-200">
                <nav>
                    <h6 className="footer-title text-white">Explore</h6>
                    <NavLink className={({ isActive }) =>
                        `mr-3 ${isActive ? 'underline' : 'hover:underline'}`
                    }>About Us</NavLink>
                    <NavLink className={({ isActive }) =>
                        `mr-3 ${isActive ? 'underline' : 'hover:underline'}`
                    } to='/all-recipe'>All Recipes</NavLink>
                    <NavLink className={({ isActive }) =>
                        `mr-3 ${isActive ? 'underline' : 'hover:underline'}`
                    } to='/add-recipe'>Add Recipes</NavLink>
                    <NavLink className={({ isActive }) =>
                        `mr-3 ${isActive ? 'underline' : 'hover:underline'}`
                    } to='/my-recipe'>My Recipes</NavLink>

                </nav>
                <nav className='space-y-2'>
                    <div>
                        <h6 className="footer-title text-white">Social</h6>
                        <div className="flex items-center gap-4">
                            <a href="https://www.facebook.com/fabiha.amatullah.2024/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaFacebook size={20}></FaFacebook>
                            </a>
                            <a href="https://www.twitter.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaTwitter size={20}></FaTwitter>
                            </a>
                            <a href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaLinkedin size={20}></FaLinkedin>
                            </a>
                            <a href="https://www.youtube.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaYoutube size={24}></FaYoutube>
                            </a>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <h6 className="footer-title text-white">Contact</h6>
                        <p className='flex items-center gap-1 '><CgMail size={22} />
                            support@grandmascookbook.com</p>
                        <p className='flex items-center gap-1'><IoCallOutline size={20} />
                            +880 1990000000</p>
                    </div>
                </nav>
                <nav className='text-base-200'>
                    <h6 className="footer-title text-white">Legal</h6>
                    <a className="link link-hover">Terms of Use</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>

            </footer>
            <p className='text-white border-t-1  border-white opacity-55 p-6 pb-10 font-normal text-sm'>Copyright © {new Date().getFullYear()} - All right reserved</p>

        </div>
    );
};

export default Footer;