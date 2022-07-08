import React from 'react';
import logo from '../assets/images/logo.png';

export const FooterPage = () => {
    return(
        <footer className="p-4 mt-24 bg-white shadow md:px-6 md:py-8 dark:bg-gray-800">
            <div className="sm:flex sm:items-center sm:justify-between">
                <button className="flex items-center mb-4 sm:mb-0">
                    <img src={logo} className="mr-3 h-8" alt="logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Harverse</span>
                </button>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <button className="mr-4 hover:underline md:mr-6">About</button>
                    </li>
                    <li>
                        <button className="mr-4 hover:underline md:mr-6">Prifacy Policy</button>
                    </li>
                    <li>
                        <button className="mr-4 hover:underline md:mr-6">Bolg</button>
                    </li>
                    <li>
                        <button className="hover:underline">FAQ</button>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022 <button className='hover:underline'>Harverse</button>. All Rights Reserved.
            </span>
        </footer>
    );
}