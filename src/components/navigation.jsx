function Navigation(){
    return(
        <div className="m-4 p-4">
            <nav>
                <ul className="flex flex-wrap justify-between items-center">
                    <div>
                        <li className="text-2xl lg:text-xl xl:text-2xl 2xl:text-4xl font-semibold lg:px-8"><h1><span className="text-amber-400 font-pacifico font-medium">Lilibetz</span>  FURNITURE</h1></li>
                    </div>
                    <div className="flex gap-2 md:gap-8 lg:gap-10 xl:gap-18 2xl:gap-24 ">
                        <li className="py-2 sm:text-sm md:text-md lg:text-md xl:text-lg 2xl:text-lg font-medium">About</li>
                        <li className="py-2 sm:text-sm md:text-md lg:text-md xl:text-lg 2xl:text-lg font-medium">Products</li>
                        <li className="py-2 sm:text-sm md:text-md lg:text-md xl:text-lg 2xl:text-lg font-medium">Contacts</li>
                        <li className="py-2 sm:text-sm md:text-md lg:text-md xl:text-lg 2xl:text-lg font-medium">Location</li>
                    </div>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;