import { React } from 'react';
import { Label, TextInput } from 'flowbite-react';
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";

export const Navbar = () => {
    return (
        <div className='sticky top-2 relative z-40 py-2 sm:py-2 md:py-4 lg:2y-4 xl:py-4 2xl-8 mx-8 text-slate-900'>
            <nav className=' bg-white-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20'>
                <div className="container mx-auto flex justify-between items-center cursor-pointer">
                    <span className='font-extrabold text-3xl'>LILIBETZ</span>
                    <ul className='font-medium flex space-x-4'>
                        <li>Search</li>
                        <li>Shop</li>
                    </ul>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-2xl text-slate-50 rounded-lg md:hidden focus:outline-none focus:ring-1 focus:ring-slate-50" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <MdMenuOpen className=''/>
                    </button>
                    <div className="hidden w-full md:block md:w-auto text-slate-900" id="navbar-default">
                    <ul className="font-medium flex space-x-4">
                        <li>My Account</li>
                        <li>Cart</li>
                    </ul>
                    </div>          
                </div>
            </nav>
        </div>
    )
}