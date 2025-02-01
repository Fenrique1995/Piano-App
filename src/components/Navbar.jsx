import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='bg-gray-800 text-white fixed top-0 left-0 w-full z-50 shadow-lg'>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='relative flex items-center justify-between h-16'>
                    {/* Logo */}
                    <div className='flex-1 flex items-center justify-between sm:items-center'>
                        <div className='flex-shrink-0'>
                            <img className='h-8 w-auto' src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" alt="Logo" />
                        </div>

                        {/* Menú de navegación en pantallas grandes */}
                        <div className='hidden sm:flex sm:ml-auto space-x-4'>
                            <Link to="/" className="text-white hover:text-gray-100">Home</Link>
                            <Link to="/sheet-music" className="text-white hover:text-gray-100">Sheet Music</Link>
                            <Link to="/about" className="text-white hover:text-gray-100">About</Link>
                        </div>
                    </div>

                    {/* Botón de menú para móviles */}
                    <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
                        <button 
                            onClick={toggleMenu} 
                            className='p-2 rounded-full bg-gray-800 text-blue-900 hover:text-blue-700 focus:outline-none'>
                            {isMenuOpen ? (
                                <Bars3Icon className='w-4'/> 
                            ) : (
                                <Bars3Icon className='w-4'/>  
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú desplegable en pantallas pequeñas */}
            {isMenuOpen && (
                <div className='sm:hidden'>
                    <div className='px-2 pt-2 pb-3 space-y-1'>
                        <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</Link>
                        <Link to="/sheet-music" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Sheet Music</Link>
                        <Link to="/about" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">About</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
