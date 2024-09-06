import hero from '../assets/img/filez.png';

export default function Hero(){
    return(
        <div>
            <div className="w-full min-h-screen">
                <div className="grid grid-cols-2">
                    <div className="h-screen col-span-1 flex flex-col justify-center px-24 bg-neutral-100">
                        <p className='font-DMsans'>Transform and Redesign Your Space</p>
                        <p className='leading-none lg:text-[150px] md:text-[125px] text-7xl font-DMsans font-thin'>Bespoke</p>
                        <p className='leading-none lg:text-[150px] md:text-[125px] text-7xl font-alata'>Interior</p>
                        <p className='leading-none lg:text-[150px] md:text-[125px] text-7xl font-DMsans font-thin'>Decor</p>
                        <p className='font-DMsans'>We are Lilibetz FURNITURE, your premier nationwide furniture shop.
                            Explore our extensive collection and place your order today.
                            You also have the option to request a custom order to perfectly suit your needs.
                        </p>
                        <button className='border-2 border-neutral-950 rounded-full w-max px-8 py-4 my-8 font-DMsans '>View Products</button>
                    </div>
                    <div className="h-screen col-span-1 flex justify-center items-center bg-neutral-200">
                        <img src={hero} type="png" alt="the chair" className="w-[290px] lg:w-[500px] z-0 md:z-10" />
                    </div>
                </div>
            </div>
        </div>
    )
}