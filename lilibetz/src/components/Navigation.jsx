
import { Label, TextInput } from 'flowbite-react';
import { IoIosSearch, IoMdMailOpen } from "react-icons/io";
import { FaFacebook, FaWhatsapp, FaInstagram, FaShoppingCart, FaPhone } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Navigation()
{
    return (
      <div className='sticky top-0 relative z-50 py-4 sm:py-4 md:py-4 lg:py-8 xl:py-8 2xl-8 mx-8'>
        <nav className="bg-zinc-950 py-4 rounded-lg">
          <div className="container mx-auto flex justify-between items-center ">
            <Link to='/' className="ml-4 text-slate-50 text-lg font-semibold">Lilibetz</Link>
            <TextInput className='mx-4' id="search" type="text" icon={IoIosSearch} placeholder="Search" />
            {/* <ul className='flex hidden md:hidden sm:hidden space-x-4'>
              <li><a href="#" className="text-black text-2xl hover:text-gray-300"><FaInstagram /></a></li>
              <li><a href="#" className="text-black text-2xl hover:text-gray-300"><FaFacebook /></a></li>
              <li><a href="#" className="text-black text-2xl hover:text-gray-300"><FaWhatsapp /></a></li>
              <li><a href="#" className="text-black text-2xl hover:text-gray-300"><FaPhone /></a></li>
              <li><a href="#" className="text-black text-2xl hover:text-gray-300"><IoMdMailOpen /></a></li>
            </ul> */}
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-2xl text-slate-50 rounded-lg md:hidden focus:outline-none focus:ring-1 focus:ring-slate-50" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <MdMenuOpen className=''/>
            </button>
            <div className="hidden w-full md:block md:w-auto text-slate-50" id="navbar-default">
              <ul className="flex space-x-10">
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='/sofas'>Sofas</Link></li>
                <li><Link to='/dining'>Dining</Link></li>
                <li><Link to='/tables'>Tables</Link></li>
                <li><Link to='/beds'>Beds</Link></li>
              </ul>
            </div>
            <ul className='flex space-x-4 mx-4'>
              <li><Link to='/cart' className="text-amber-400 sm:text-xl text-2xl hover:text-gray-300"><FaShoppingCart /></Link></li>
            </ul>
          
          </div>
        </nav>
      </div>
        
    )
} 