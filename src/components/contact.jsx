import { TfiLocationPin } from "react-icons/tfi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";

export default function Contacts() {
    return (
        <div className="min-h-screen lg:grid lg:grid-cols-5 gap-12 text-black bg-neutral-200">
            <div className="col-span-2 flex flex-col items-start justify-center p-8 md:p-12 lg:p-24">
                <p className="py-8 font-alata">Contact Us</p>
                <h3 className="leading-none lg:text-[100px] md:text-[80px] text-7xl font-alata font-bold">We're thrilled to hear from you!</h3>
                <p className="py-8 font-poiretOne">At Lilibetz, we pride ourselves on delivering the highest quality services to our valued customers. We invite you to reach out to us to place orders or to make inquiries. Our dedicated team is always here to assist you and ensure your satisfaction.</p>
            </div>
            <div className="lg:col-span-3 flex justify-center lg:my-24 pb-24 px-8 lg:mr-24">
                <div className="md:grid md:grid-cols-2 md:gap-12">
                    <div className="grid md:grid-rows-5  gap-8 md:gap-12 pb-8 md:pb-0">
                        <div className="row-span-3 shadow-neo flex flex-col items-start justify-center rounded-[25px] px-4 md:px-12 py-4">
                            <TfiLocationPin className="text-6xl text-amber-400"/>
                            <h4 className="py-4 font-poiretOne text-5xl font-semibold">Our Pin</h4>
                            <p className=" font-poiretOne text-xl text-wrap">Our establishment is situated in <span className="text-amber-400 font-semibold">Nyamasaria</span>, conveniently located along the Kisumu Nairobi Highway in the vibrant city of Kisumu. 
                            <a className="text-amber-400 font-semibold" target="blank" href="https://www.google.com/maps/place/0%C2%B007'02.3%22S+34%C2%B047'18.3%22E/@-0.1172947,34.7877833,19z/data=!3m1!4b1!4m4!3m3!8m2!3d-0.117296!4d34.788427?hl=en&entry=ttu"> Here</a> is out pin</p>
                        </div>
                        <div className="row-span-2 shadow-neo flex flex-col items-start justify-center rounded-[25px] px-4 md:px-12 py-4">
                            <MdOutlineAlternateEmail className="text-6xl text-amber-400"/>
                            <h4 className="py-4 font-poiretOne text-5xl font-semibold">Write To Us</h4>
                            <p className=" font-poiretOne text-xl text-wrap">Email us at <span className="text-amber-400 font-semibold">sales@lilibetzfurniture.com</span> rest assured, we will reply promptly.</p>
                        </div>
                    </div>
                    <div className="grid md:grid-rows-5 gap-8 md:gap-12">
                        <div className="row-span-2 shadow-neo flex flex-col items-start justify-center rounded-[25px] px-4 md:px-12 py-4">
                            <IoCalendarOutline className="text-6xl text-amber-400"/>
                            <h4 className="py-4 font-poiretOne text-5xl font-semibold">Open Hours</h4>
                            <p className=" font-poiretOne text-xl text-wrap">We are open from <span className="text-amber-400 font-semibold">8:00 am</span> until <span className="text-amber-400 font-semibold">6:00 pm</span> every day of the week.</p>
                        </div>
                        <div className="row-span-3 shadow-neo flex flex-col items-start justify-center rounded-[25px] px-4 md:px-12 py-4">
                            <MdOutlineLocalPhone className="text-6xl text-amber-400"/>
                            <h4 className="py-4 font-poiretOne text-5xl font-semibold">Call Us</h4>
                            <p className=" font-poiretOne text-xl text-wrap">To speak with us directly, call our dedicated line at <a  href="tel:+254759797337" className="text-amber-400 font-semibold">+254 759 797 337</a>. Our team is readily available and eager to assist you with any inquiries or concerns you may have.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}