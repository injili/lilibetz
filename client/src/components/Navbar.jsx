import { React } from 'react';
import { Label, TextInput } from 'flowbite-react';
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";

export const Navbar = () => {
    return (
        <div className='sticky top-9 relative z-40 py-4 sm:py-4 md:py-4 lg:py-8 xl:py-8 2xl-8 mx-8'>
            <nav className=' bg-white-400 py-4 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20'>
            <div className="container mx-auto flex justify-between items-center ">
                <span className='text-slate-900'>LOGO</span>
                {/* <img className='h-12 hidden md:block' alt='lilibetz logo' src={bigLogo}/>
                <img className='h-8 w-20 md:hidden' src={smallLogo} alt="lilibetz logo" /> */}
                <TextInput className='mx-4' id="search" type="text" icon={IoIosSearch} placeholder="Search" />
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-2xl text-slate-50 rounded-lg md:hidden focus:outline-none focus:ring-1 focus:ring-slate-50" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <MdMenuOpen className=''/>
                </button>
                <div className="hidden w-full md:block md:w-auto text-slate-900" id="navbar-default">
                <ul className="flex space-x-10">
                    <li>Shop</li>
                    <li>Sofas</li>
                    <li>Tables</li>
                </ul>
                </div>          
            </div>
            </nav>
        </div>
    )
}