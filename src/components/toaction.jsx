import Building from '../assets/img/building.avif';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export default function Toaction() {
    return (
        <div className="h-96 bg-fixed bg-cover" style={{ backgroundImage:  `url(${Building})` }}>
            <div className='flex flex-col text-white font-alata items-center justify-center bg-black backdrop-blur-sm bg-opacity-30 h-full'>
                <h3 className='text-white  font-alata font-semibold text-3xl text-center'> transform your space today!</h3>
                <p className='text-center'>Discover elegant, durable, and affordable furniture tailored to your style. </p>
                <Link to='/contacts'>
                <motion.button className='border-2 border-white rounded-full w-max px-8 py-1 my-4 font-alata font-semibold '
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                            CONTACT US TODAY
                </motion.button>
                </Link>
            </div>

        </div>
    )
}