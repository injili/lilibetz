import heroImage from '../assets/img/hero.jpg';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';

//Variants
const banner = {
    animate: {
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.5,
        },
    },
};

const fromLeft = {
    initial: {
        x: 2000,
    },
    animate: {
        x: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
        }
    }
}

const fromRight = {
    initial: {
        x: -1000,
    },
    animate: {
        x: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
        }
    }
}

const fromBottom = {
    initial: {
        y: 1000,
    },
    animate: {
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
        }
    }
}


function Hero() {
    return (
        <motion.div variants={banner} initial="initial" animate="animate" className=' text-zinc-100'>
            <div className="flex px-4 lg:px-24 flex-wrap gap-y-4 md:gap-x-24 items-center">
                <motion.span variants={fromLeft} className="font-b leading-none lg:text-[200px] text-8xl font-bowldyOneSC">bespoke</motion.span>
                <motion.span variants={fromLeft} className="md:max-w-72 md:font-medium text-normal text-sm md:text-right font-alata">
                    <p>LOREM IPSUM DOLOR SIT AMET, SUSPENDISSE RHONCUS METUS ET ANTE DICTUM
                         TEMPUS LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. ET
                          ANTE DICTUM TEMPUS. ET ANTE DICTUM.
                    </p>
                </motion.span>
                <motion.div variants={fromLeft} className='hidden md:block'>
                    <div className='flex text-2xl gap-4'>
                        <motion.div
                            whileHover={{ scale: 1.5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <FaInstagram/>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <FaFacebookF/>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <FaWhatsapp/>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <motion.div variants={fromLeft} className="z-10 relative flex overflow-x-hidden overflow-y-hidden">
                <div className="py-0 animate-marquee whitespace-nowrap">
                    <span className=" font-bowldyOneSC leading-none lg:text-[230px] text-8xl md:mx-24 mx-8">interior</span>
                    <span className=" font-bowldyOneSC leading-none lg:text-[230px] text-8xl md:mx-24 mx-8">interior</span>
                    <span className=" font-bowldyOneSC leading-none lg:text-[230px] text-8xl md:mx-24 mx-8">interior</span>
                    <span className=" font-bowldyOneSC leading-none lg:text-[230px] text-8xl md:mx-24 mx-8">interior</span>
                    <span className=" font-bowldyOneSC leading-none lg:text-[230px] text-8xl md:mx-24 mx-8">interior</span>
                </div>

                <div className="absolute top-0 py-0 animate-marquee2 whitespace-nowrap">
                    <span className=" font-bowldyOneSC leading-none lg:text-[230px] text-8xl md:mx-24 mx-8">interior</span>
                    <span className=" font-bowldyOneSC leading-none lg:text-[230px] text-8xl md:mx-24 mx-8">interior</span>
                    <span className=" font-bowldyOneSC leading-none lg:text-[230px] text-8xl md:mx-24 mx-8">interior</span>
                    <span className=" font-bowldyOneSC leading-none lg:text-[230px] text-8xl md:mx-24 mx-8">interior</span>
                    <span className=" font-bowldyOneSC leading-none lg:text-[230px] text-8xl md:mx-24 mx-8">interior</span>
                </div>
            </motion.div>
            <div className="flex justify-center items-center lg:gap-44"> 
                    <motion.div variants={fromRight}>
                        <motion.button 
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className='text-zinc-200 text-lg bg-amber-400 font-alata text-zinc-950 font-extrabold rounded-full h-44 w-44 hidden lg:block'>
                                View Products
                        </motion.button>
                    </motion.div>
                    <motion.span variants={fromLeft} className="font-bowldyOneSC leading-none lg:text-[230px] text-8xl">decor</motion.span>
            </div>
            <motion.div variants={fromBottom}>
                <img src={heroImage} alt="this" className='w-full'/>
            </motion.div>
        </motion.div>
    );
}

export default Hero;