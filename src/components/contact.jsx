import { TfiLocationPin } from "react-icons/tfi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";

export default function Contacts() {
    return (
        <div className="min-h-screen grid grid-cols-5 gap-4 text-white">
            <div className="col-span-2 flex flex-col items-start justify-center p-24">
                <p className="py-8 font-alata">Contact Us</p>
                <h3 className="leading-none lg:text-[70px] md:text-[150px] text-7xl font-alata font-bold">We're thrilled to hear from you!</h3>
                <p className="py-8 font-alata">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus metus et ante dictum tempus.</p>
            </div>
            <div className="col-span-3 flex justify-center py-8">
                <div className="grid grid-cols-2 gap-8">
                    <div className="grid grid-rows-5 gap-8">
                        <div className="row-span-3 border border-sm flex flex-col items-start justify-center rounded-lg p-8">
                            <TfiLocationPin className="text-[200px]"/>
                            <h4 className="p font-alata">Our Pin</h4>
                            <p className=" font-alata">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="row-span-2 border border-sm flex flex-col items-start justify-center rounded-lg p-8">
                            <MdOutlineAlternateEmail className="text-7xl"/>
                        </div>
                    </div>
                    <div className="grid grid-rows-5 gap-8">
                        <div className="row-span-2 border border-sm flex flex-col items-start justify-center rounded-lg p-8"></div>
                        <div className="row-span-3 border border-sm flex flex-col items-start justify-center rounded-lg p-8"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}