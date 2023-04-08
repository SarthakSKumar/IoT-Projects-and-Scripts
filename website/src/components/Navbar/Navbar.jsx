import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Contributor from "../Contributors/Contributor";

function Navbar() {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const openOverlay = () => {
        setIsOverlayOpen(true);
    };

    const [isNavOpen, setIsNavOpen] = useState(false);

    function toggleNav() {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <a
                    href='#'
                    className='flex items-center'
                >
                    <img
                        src={logo}
                        className='h-8 md:h-12 mr-3'
                        alt='Flowbite Logo'
                    />
                    <span className='self-center text-lg xs:text-2xl font-semibold whitespace-nowrap dark:text-white md:text-4xl'>
                        Iot Projects and Scripts
                    </span>
                </a>
                <div className='flex md:order-2'>
                    <a
                        href='https://github.com/SarthakSKumar/IoT-Projects-and-Scripts'
                        className=''
                        target='_blank'
                    >
                        <i class='bx bxl-github text-white text-[1.75rem] md:text-[2rem] pt-[0.45rem] pr-2 xs:pr-0'></i>
                    </a>
                    <button
                        type='button'
                        className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                        aria-controls='navbar-sticky'
                        aria-expanded={isNavOpen}
                        onClick={toggleNav}
                    >
                        <span className='sr-only'>Open main menu</span>
                        <svg
                            className='w-6 h-6'
                            aria-hidden='true'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fillRule='evenodd'
                                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                        isNavOpen ? "" : "hidden"
                    }`}
                    id='navbar-sticky'
                >
                    <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                        <li>
                            <a
                                href='#'
                                className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
                                aria-current='page'
                            >
                                All Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                            >
                                Arduino
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                            >
                                ESP
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                onClick={openOverlay}
                            >
                                Contributors
                            </a>
                            {isOverlayOpen && (
                                <Contributor closeOverlay={() => setIsOverlayOpen(false)} />
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
