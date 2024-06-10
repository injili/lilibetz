import heroImage from '../assets/img/hero.jpg';
import { HiMenuAlt4 } from "react-icons/hi";


function Hero() {
    return (
        <div>
            <div className="flex px-4 lg:px-24 flex-wrap lg:gap-24 items-center">
                <span className="font-semibold leading-none lg:text-[180px] text-8xl">bespoke</span>
                <span className="lg:w-60 font-semibold text-sm hidden md:block">
                    <p>Lorem ipsum dolor sit amet,  
                       Suspendisse rhoncus metus et ante dictum tempus
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </span>
            </div>
            <div className="relative flex overflow-x-hidden overflow-y-hidden">
                <div className="py-0 animate-marquee whitespace-nowrap">
                    <span className="font-semibold leading-none lg:text-[200px] text-9xl md:mx-24 mx-8">interior</span>
                    <span className="font-semibold leading-none lg:text-[200px] text-9xl md:mx-24 mx-8">interior</span>
                    <span className="font-semibold leading-none lg:text-[200px] text-9xl md:mx-24 mx-8">interior</span>
                    <span className="font-semibold leading-none lg:text-[200px] text-9xl md:mx-24 mx-8">interior</span>
                    <span className="font-semibold leading-none lg:text-[200px] text-9xl md:mx-24 mx-8">interior</span>
                </div>

                <div className="absolute top-0 py-0 animate-marquee2 whitespace-nowrap">
                    <span className="font-semibold leading-none lg:text-[200px] text-9xl md:mx-24 mx-8">interior</span>
                    <span className="font-semibold leading-none lg:text-[200px] text-9xl md:mx-24 mx-8">interior</span>
                    <span className="font-semibold leading-none lg:text-[200px] text-9xl md:mx-24 mx-8">interior</span>
                    <span className="font-semibold leading-none lg:text-[200px] text-9xl md:mx-24 mx-8">interior</span>
                    <span className="font-semibold leading-none lg:text-[200px] text-9xl md:mx-24 mx-8">interior</span>
                </div>
            </div>
            <div className="flex justify-center mx-24">
                <div className='flex absolute items-center lg:gap-44'> 
                    <button className='z-20 left-96 text-zinc-200 bg-zinc-950 rounded-full h-44 w-44 hidden md:block'>Scroll Down</button>
                    <span className="z-20 font-semibold leading-none lg:text-[200px] text-9xl">decor</span><br/>
                </div>
                <img src={heroImage} alt="this" className='z-10 mt-16 lg:mt-[120px] rounded-lg'/>
            </div>
        </div>
    );
}

export default Hero;