
import { BsThreeDotsVertical } from "react-icons/bs";

export const Navbar = () => {
    return (
        <div className='sticky top-0 relative z-30 py-4 mx-4 text-slate-900'>
            <nav className=' bg-white-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
                <div className='z-40 container flex justify-between items-center cursor-pointer px-4 py-4'>
                    <span className='font-extrabold text-3xl md:text-3xl lg:text-3xl xl:text-4xl'>LILIBETZ</span>
                    <ul className='font-medium flex space-x-4'>
                        <li>Search</li>
                        <li>Cart</li>
                    </ul>
                    <button data-collapse-toggle="navbar-default" type="button" className="text-slate-900 inline-flex items-center py-3 w-5 h-10 justify-center text-xl rounded-lg md:hidden focus:outline-none focus:text-cyan-900" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <BsThreeDotsVertical />
                    </button>
                    <div className="hidden w-full md:block md:w-auto text-slate-900" id="navbar-default">
                        <ul className="font-medium flex space-x-4">
                            <li>Shop</li>
                            <li>My Account</li>
                        </ul>
                    </div>          
                </div>
            </nav>
        </div>

    )
}