import data_products from './assets/data';
import Item from './Item';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const Popular = () => {
    useEffect(()=>{
        Aos.init({
            duration: 2000,
            once: true,
        })
    }, [])
    return (
        <div className='bg-zinc-950 py-8 text-slate-50 mx-4 sm:mx-4 md:mx-4 lg:mx-8 xl:mx-8 2xl:mx-8 rounded-lg'>
            <header className="text-center mb-8">
                <h2 className="font-extralight font-raleway text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl" data-aos='fade-up'>Featured Products</h2>
            </header>
            <div className="mx-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8" data-aos='zoom-in-up'>
                {data_products.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
                })}
            </div>
        </div>
    )
}

export default Popular