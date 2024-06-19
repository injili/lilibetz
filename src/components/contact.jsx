import { TfiLocationPin } from "react-icons/tfi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";

export default function Contacts() {
    return (
        <div className="min-h-screen grid grid-cols-5 gap-12 text-black bg-neutral-200">
            <div className="col-span-2 flex flex-col items-start justify-center p-24">
                <p className="py-8 font-alata">Contact Us</p>
                <h3 className="leading-none lg:text-[70px] md:text-[150px] text-7xl font-alata font-bold">We're thrilled to hear from you!</h3>
                <p className="py-8 font-poiretOne">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus metus et ante dictum tempus .</p>
            </div>
            <div className="col-span-3 flex justify-center my-24 mr-24">
                <div className="grid grid-cols-2 gap-12">
                    <div className="grid grid-rows-5 gap-12">
                        <div className="row-span-3 shadow-neo flex flex-col items-start justify-center rounded-[25px] px-12">
                            <TfiLocationPin className="text-6xl text-amber-400"/>
                            <h4 className="py-4 font-poiretOne text-5xl font-semibold">Our Pin</h4>
                            <p className=" font-poiretOne text-xl text-wrap">Lorem isum dolor sit amet, <span className="text-amber-400">consectetur adipiscing</span> elit
                            Lorem ipsum dolor sit amet, consectetur  rhoncus metus et ante dictum tempus adipiscing elit.</p>
                        </div>
                        <div className="row-span-2 shadow-neo flex flex-col items-start justify-center rounded-[25px] px-12">
                            <MdOutlineAlternateEmail className="text-6xl text-amber-400"/>
                            <h4 className="py-4 font-poiretOne text-5xl font-semibold">Write To Us</h4>
                            <p className=" font-poiretOne text-xl text-wrap">Lorem <span className="text-amber-400">consectetur adipiscing</span> econsectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="grid grid-rows-5 gap-12">
                        <div className="row-span-2 shadow-neo flex flex-col items-start justify-center rounded-[25px] px-12">
                            <IoCalendarOutline className="text-6xl text-amber-400"/>
                            <h4 className="py-4 font-poiretOne text-5xl font-semibold">Open Hours</h4>
                            <p className=" font-poiretOne text-xl text-wrap">Lorem <span className="text-amber-400">consectetur adipiscing</span> econsectetur adipiscing elit.</p>
                        </div>
                        <div className="row-span-3 shadow-neo flex flex-col items-start justify-center rounded-[25px] px-12">
                            <MdOutlineLocalPhone className="text-6xl text-amber-400"/>
                            <h4 className="py-4 font-poiretOne text-5xl font-semibold">Our Pin</h4>
                            <p className=" font-poiretOne text-xl text-wrap">Lorem isum dolor sit amet, <span className="text-amber-400">consectetur adipiscing</span> elit
                            Lorem ipsum dolor sit amet, consectetur  rhoncus metus et ante dictum tempus adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}