import heroImage from '../assets/img/hero.jpg';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";


function Hero() {
    return (
        <div>
            <div className="flex px-4 lg:px-24 flex-wrap gap-y-4 md:gap-x-24 items-center">
                <span className="font-semibold leading-none lg:text-[180px] text-8xl">bespoke</span>
                <span className="md:max-w-60 md:font-semibold text-normal text-sm md:text-right">
                    <p>Lorem ipsum dolor sit amet,  
                       Suspendisse rhoncus metus et ante dictum tempus
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </span>
                <div className='hidden md:block'>
                    <div className='flex text-2xl gap-4'>
                        <FaInstagram/>
                        <FaFacebookF/>
                        <FaWhatsapp/>
                    </div>
                </div>
            </div>
            <div className="z-10 relative flex overflow-x-hidden overflow-y-hidden">
                <div className="py-0 animate-marquee whitespace-nowrap">
                    <span className="font-semibold leading-none lg:text-[200px] text-8xl md:mx-24 mx-8">interior</span>
                    <span className="font-semibold leading-none lg:text-[200px] text-8xl md:mx-24 mx-8">interior</span>
                    <span className="font-semibold leading-none lg:text-[200px] text-8xl md:mx-24 mx-8">interior</span>
                    <span className="font-semibold leading-none lg:text-[200px] text-8xl md:mx-24 mx-8">interior</span>
                    <span className="font-semibold leading-none lg:text-[200px] text-8xl md:mx-24 mx-8">interior</span>
                </div>

                <div className="absolute top-0 py-0 animate-marquee2 whitespace-nowrap">
                    <span className="font-semibold leading-none lg:text-[200px] text-8xl md:mx-24 mx-8">interior</span>
                    <span className="font-semibold leading-none lg:text-[200px] text-8xl md:mx-24 mx-8">interior</span>
                    <span className="font-semibold leading-none lg:text-[200px] text-8xl md:mx-24 mx-8">interior</span>
                    <span className="font-semibold leading-none lg:text-[200px] text-8xl md:mx-24 mx-8">interior</span>
                    <span className="font-semibold leading-none lg:text-[200px] text-8xl md:mx-24 mx-8">interior</span>
                </div>
            </div>
            <div className="flex justify-center items-center lg:gap-44"> 
                    <button className='text-zinc-200 text-lg bg-zinc-950 rounded-full h-44 w-44 hidden lg:block'>Scroll Down</button>
                    <span className="font-semibold leading-none lg:text-[200px] text-8xl">decor</span>
            </div>
            <div className='flex justify-center mx-4 my-2 md:my-8'>
                <img src={heroImage} alt="this" className='rounded-lg'/>
            </div>
        </div>
    );
}

export default Hero;