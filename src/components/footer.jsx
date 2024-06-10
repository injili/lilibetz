import { FaRegCopyright, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const getFullYear = () => (new Date().getFullYear());

export default function Footer() {
    return (
        <div>
            <div className="m-4 p-8 bg-zinc-950 text-zinc-50 rounded-lg">
                <div className="flex flex-wrap items-center justify-between  gap-y-4">
                    <span className="flex items-center gap-4 text-xl lg:text-xl xl:text-2xl 2xl:text-4xl font-semibold">
                        <h1>
                            <span className="text-amber-400 font-pacifico font-medium">
                                Lilibetz
                            </span>  FURNITURE
                        </h1>
                        <ul className="flex text-zinc-500 justify-center text-xl gap-2">
                            <li className="hover:text-amber-400"><FaInstagram/></li>
                            <li className="hover:text-amber-400"><FaFacebookF/></li>
                            <li className="hover:text-amber-400"><FaWhatsapp/></li>
                        </ul>
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                        <FaRegCopyright/>
                        <p> {getFullYear()} - Lilibetz FURNITURE</p>
                        <p>from INJILI, with Love</p>
                    </div>
                    <ul className="flex gap-2 md:gap-4  lg:gap-6">
                        <li>Home</li>
                        <li>Products</li>
                        <li>Yard</li>
                        <li>Contacts</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}