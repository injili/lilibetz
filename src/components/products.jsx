import Bed from '../assets/img/bed.avif';
import Coffee from '../assets/img/coffee.avif';
import Dining from '../assets/img/dining.avif';
import Sofa from '../assets/img/sofa.avif';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { MdNavigateNext } from "react-icons/md";

export default function Products() {
    return(
        <div>
            <div className="">
                <div className="grid md:grid-rows-2 md:grid-flow-col bg-neutral-200  gap-4 px-4 h-screen">
                    <motion.div className="block rounded-lg row-span-1 col-span-1" style={{ backgroundImage: `url(${Sofa})` }} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.9 }}>
                        <Link to='/products'>
                        <div className='flex bg-black bg-opacity-10 items-center justify-center h-full hover:bg-neutral-950 hover:backdrop-blur-sm hover:bg-opacity-25 rounded-lg'>
                            <h3 className='z-40 font-bowldyOneSC text-3xl lg: text-[70px] text-white'>sofas</h3>
                        </div>
                        </Link>
                    </motion.div>
                    <motion.div className="block rounded-lg row-span-1 col-span-1" style={{ backgroundImage: `url(${Bed})` }} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.9 }}>
                        <Link to='/products'>
                        <div className='flex bg-black bg-opacity-10  items-center justify-center h-full hover:bg-neutral-950 hover:backdrop-blur-sm hover:bg-opacity-25 rounded-lg'>
                            <h3 className='z-40 font-bowldyOneSC text-3xl lg: text-[70px] text-white'>beds</h3>
                        </div>
                        </Link>
                    </motion.div>
                    <motion.div className="block rounded-lg row-span-1 col-span-1" style={{ backgroundImage: `url(${Coffee})` }} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.9 }}>
                        <Link to='/products'>
                        <div className='flex bg-black bg-opacity-10 items-center justify-center h-full hover:bg-neutral-950 hover:backdrop-blur-sm hover:bg-opacity-25 rounded-lg'>
                            <h3 className='z-40 font-bowldyOneSC text-3xl lg: text-[70px] text-white'>tables</h3>
                        </div>
                        </Link>
                    </motion.div>
                    <motion.div className="block rounded-lg row-span-1 col-span-1" style={{ backgroundImage: `url(${Dining})` }} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.9 }}>
                        <Link to='/products'>
                        <div className='flex bg-black bg-opacity-10 items-center justify-center h-full hover:bg-neutral-950 hover:backdrop-blur-sm hover:bg-opacity-25 rounded-lg'>
                            <h3 className='z-40 font-bowldyOneSC text-3xl lg: text-[70px] text-white'>dining</h3>
                        </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
            <div className="text-black bg-neutral-200 flex justify-end font-alata">
                <Link to="/products">
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="my-8 mx-12 text-2xl font-semibold flex items-end gap-2">view all products <MdNavigateNext />
                    </motion.button>
                </Link>
            </div>
        </div>
    )
}