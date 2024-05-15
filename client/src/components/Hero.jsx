import chairphoto from '../assets/img/chair.jpg';
import herophoto from '../assets/img/hero.jpg';
export const Hero = () =>{
    return (
        <div className='relative'>
            <div className="mx-4 px-4 h-svh flex grid grid-cols-2 gap-8">
                <div>
                    <p className="text-lg text-neutral-500 font-extralight">Transform and Redisign Your Home</p>
                    <p className="py-4 text-9xl font-thin">Discover <span className="font-normal">Your Perfect Seat</span></p>
                    <p className="text-lg text-neutral-500 font-extralight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus id sapien dui. Morbi nisi ante, convallis in lacus in,</p>
                    <button className="my-4 border-2 border-neutral-900 rounded-full py-2 px-8">Pre-order Now</button>
                    <div className='bg-neutral-300 py-3 px-3 mt-12 rounded-3xl flex grid grid-cols-4 gap-2'>
                        <div>
                            <img className="h-28 w-28 rounded-3xl" src={chairphoto} alt="photo of a chair" />
                        </div>
                        <div className='text-neutral-600 col-span-3 relative text-sm'>
                            <div className='flex-initial'>
                                <button className="border-2 border-neutral-600 rounded-full py-1 px-3 my-1 mx-1">Sofas sets</button>
                                <button className="border-2 border-neutral-600 rounded-full py-1 px-3 my-1 mx-1">Coffee Tables</button>
                                <button className="border-2 border-neutral-600 rounded-full py-1 px-3 my-1 mx-1">Office Sets</button>
                                <button className="border-double border-4 text-yellow-50 border-yellow-50 rounded-full py-1 px-3 my-1 mx-1">Dining Sets</button>
                                <button className="border-2 border-neutral-600 rounded-full py-1 px-3 my-1 mx-1">Beds</button>
                                <button className="border-2 border-neutral-600 rounded-full py-1 px-3 my-1 mx-1">Shelves</button>
                            </div>
                            <div>
                                <p className='text-gray-950 inset-x-0 bottom-0 text-4xl ml-1'>Funiture Collection</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bg-cover bg-center bg-no-repeat"  style={{ backgroundImage: `url(${herophoto})` }}>
                </div>
            </div>

        </div>
    )
}