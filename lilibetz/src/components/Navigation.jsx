
import { Label, TextInput } from 'flowbite-react';
import { IoIosSearch } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Navigation()
{
    return (
      <div className='pt-4 pb-8 mx-8'>
        <nav className="bg-slate-50 pb-3 rounded-lg">
          <div className="container mx-auto flex justify-between items-center ">
            <Link to='/' className="text-black text-lg font-semibold">Logo</Link>
            <TextInput id="search" type="text" icon={IoIosSearch} placeholder="Search" />
            <ul className='flex space-x-4' >
              <li><a href="#" className="text-black text-2xl hover:text-gray-300"><FaInstagram /></a></li>
              <li><a href="#" className="text-black text-2xl hover:text-gray-300"><FaFacebook /></a></li>
              <li><a href="#" className="text-black text-2xl hover:text-gray-300"><FaWhatsapp /></a></li>
            </ul>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-black hover:text-gray-300 ">+254712345678</a></li>
              <li><a href="#" className="text-black hover:text-gray-300 ">order@lilibetz.com</a></li>
            </ul>
            <ul className='flex space-x-4'>
              <li><Link to='/cart' className="text-black text-2xl hover:text-gray-300"><FaShoppingCart /></Link></li>
            </ul>
          
          </div>
        </nav>
        <nav className="bg-slate-200  py-8 rounded-lg text-zinc-900">
          <div className="container mx-auto flex justify-center items-center">
            <ul className="flex space-x-10">
              <li><Link to='/shop'>Shop</Link></li>
              <li><Link to='/sofas'>Sofas</Link></li>
              <li><Link to='/dining'>Dining</Link></li>
              <li><Link to='/tables'>Tables</Link></li>
              <li><Link to='/beds'>Beds</Link></li>
            </ul>
          </div>    
        </nav>
      </div>
        
    )
} 