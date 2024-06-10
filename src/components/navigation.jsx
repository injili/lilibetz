import { IoMenu } from "react-icons/io5";

function Navigation(){
    return(
        <div className="z-40 sticky top-0 bg-stone-100 backdrop-filter backdrop-blur-md bg-opacity-40">
            <nav className="mx-4 py-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="text-2xl lg:text-xl xl:text-2xl 2xl:text-4xl font-bold md:px-8">
                        <h1><span className="text-amber-400 font-pacifico font-medium">Lilibetz</span>  FURNITURE</h1>
                    </div>
                    <button className="block md:hidden text-2xl" type="button" data-collapse-toggle="navbar-default" aria-controls="navbar-default" aria-expanded="false">
                        <IoMenu/>
                    </button>
                    <div className="hidden md:block px-8"  id="navbar-default">
                        <ul className="flex space-x-4">
                            <li className="font-bold text-md xl:text-lg 2xl:text-lg">HOME</li>
                            <li className="font-bold text-md xl:text-lg 2xl:text-lg">ABOUT</li>
                            <li className="font-bold text-md xl:text-lg 2xl:text-lg">PRODUCTS</li>
                            <li className="font-bold text-md xl:text-lg 2xl:text-lg">CONTACTS</li>
                            <li className="font-bold text-md xl:text-lg 2xl:text-lg">YARD</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;