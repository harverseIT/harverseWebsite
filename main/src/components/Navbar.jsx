import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';
import {Link} from 'react-router-dom'

export const NavigationBar = () => {
    const [nav, setNav] = useState(false);

    const handleNavbar = () => {
        setNav(!nav);
    }

    return(
        <nav className="sticky top-0 bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-700 z-20">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <button className="flex items-center">
                    <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Harverse</span>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link to="/">
                                <button className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-darkGreen md:p-0 dark:text-white" aria-current="page">Home</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://coffeebeanuniverse.com/">
                                <button className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-lightGreen md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Blog
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/faq">                            
                                <button className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-lightGreen md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">FAQ</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                <button className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-lightGreen md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <button onClick={handleNavbar} data-collapse-toggle="mobile-menu" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button" aria-controls='mobile-menu' aria-expanded='false'>
                    {nav ? <FontAwesomeIcon icon={faXmark} size={20} /> : <FontAwesomeIcon icon={faBars} /> }
                </button>
                <div className={nav ? 'fixed left-0 top-0 h-full ease-in-out duration-500 mt-8' : 'ease-in-out duration-500 fixed hidden'}>
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li className='w-screen p-4 bg-lightGreen/60 backdrop-blur-sm text-white text-center dark:text-white dark:bg-[#1d1f23]/70'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='w-screen p-4 bg-lightGreen/60 backdrop-blur-sm text-white text-center dark:text-white dark:bg-[#1d1f23]/70'>
                            <Link to="https://coffeebeanuniverse.com/">Blog</Link>
                        </li>
                        <li className='w-screen p-4 bg-lightGreen/60 backdrop-blur-sm text-white text-center dark:text-white dark:bg-[#1d1f23]/70'>
                            <Link to="/faq">FAQ</Link>
                        </li>
                        <li className='w-screen p-4 bg-lightGreen/60 backdrop-blur-sm text-white text-center dark:text-white dark:bg-[#1d1f23]/70'>
                            <Link to="/about">About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}