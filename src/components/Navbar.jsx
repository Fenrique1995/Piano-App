import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className='bg-blue-600 text-white fixed top-0 left-0 w-full z-50 shadow-lg'>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='relative flex items-center justify-between h-16'>
                    <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                    {/* Aquí podrías agregar el ícono de un menú para móvil */}
                    </div>
                    <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                        <div className='flex-shrink-0'>
                            <h1 className='text-2xl font-semibold'>Mi Piano</h1>
                        </div>
                        <div className='hidden sm:block sm:ml-6'>
                            <div className='flex space-x-4'>
                            <Link  to="/" className="text-white hover:text-gray-300">Home</Link>
                <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                <Link to="/sheet-music" className="text-white hover:text-gray-300">Sheet Music</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;