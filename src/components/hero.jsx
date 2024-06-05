import heroImage from '../assets/img/hero.jpg'


function Hero() {
    return (
        <div>
            <div className="flex px-24 flex-row gap-24 items-center">
                <span className="font-medium leading-none text-[250px]">bespoke</span>
                <span className="w-96 font-medium">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse rhoncus metus et ante dictum tempus
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </span>
            </div>
            <div className="relative flex overflow-x-hidden overflow-y-hidden">
                <div className="py-0 animate-marquee whitespace-nowrap">
                    <span className="font-medium leading-none text-[250px] mx-24">interior</span>
                    <span className="font-medium leading-none text-[250px] mx-24">interior</span>
                    <span className="font-medium leading-none text-[250px] mx-24">interior</span>
                    <span className="font-medium leading-none text-[250px] mx-24">interior</span>
                    <span className="font-medium leading-none text-[250px] mx-24">interior</span>
                </div>

                <div className="absolute top-0 py-0 animate-marquee2 whitespace-nowrap">
                    <span className="font-medium leading-none text-[250px] mx-24">interior</span>
                    <span className="font-medium leading-none text-[250px] mx-24">interior</span>
                    <span className="font-medium leading-none text-[250px] mx-24">interior</span>
                    <span className="font-medium leading-none text-[250px] mx-24">interior</span>
                    <span className="font-medium leading-none text-[250px] mx-24">interior</span>
                </div>
            </div>
            <div className="flex justify-center mx-24">
                <span className="z-20 absolute font-medium leading-none text-[250px]">decor.</span><br/>
                <img src={heroImage} alt="this" className='z-10 mt-[150px] rounded-lg'/>
            </div>
        </div>
    );
}

export default Hero;