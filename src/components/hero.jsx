import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from 'framer-motion';
import imageThingy from '../assets/img/file.png'
// import hero from '../assets/img/hero.jpg';

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
        y: -1000,
    },
    animate: {
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 2.5,
        }
    }
}

function Hero() {
    return (
        <motion.div variants={banner} initial="initial" animate="animate" className='flex justify-center overflow-x-hidden text-zinc-100 min-h-screen'
            >
            <div className="flex flex-col relative items-center justify-center ">
                <div className="flex flex-wrap px-4 lg:px-24 gap-y-1 md:gap-x-24 items-center w-screen justify-center">
                    <motion.span variants={fromLeft} className="leading-none lg:text-[200px] md:text-[150px] text-7xl font-bowldyOneSC z-0">bespoke</motion.span>
                    <motion.span variants={fromLeft} className="md:max-w-72 md:font-medium text-normal text-sm md:text-right font-alata">
                        <p>LOREM IPSUM DOLOR SIT AMET, SUSPENDISSE RHONCUS METUS ET ANTE DICTUM
                            TEMPUS LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. ET
                            ANTE DICTUM TEMPUS. ET ANTE DICTUM.
                        </p>
                    </motion.span>
                    <motion.div variants={fromLeft} className='hidden lg:block'>
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
                <motion.img variants={fromBottom} src={imageThingy} alt="the chair" className="absolute w-[550px] z-10" />
                <motion.div variants={fromLeft} className="z-10 relative flex overflow-x-hidden overflow-y-hidden">
                    <div className="py-0 animate-marquee whitespace-nowrap">
                        <span className=" font-bowldyOneSC leading-none lg:text-[230px] md:text-[150px] text-7xl md:mx-24 mx-8">interior</span>
                        <span className=" font-bowldyOneSC leading-none lg:text-[230px] md:text-[150px] text-7xl md:mx-24 mx-8">interior</span>
                        <span className=" font-bowldyOneSC leading-none lg:text-[230px] md:text-[150px] text-7xl md:mx-24 mx-8">interior</span>
                        <span className=" font-bowldyOneSC leading-none lg:text-[230px] md:text-[150px] text-7xl md:mx-24 mx-8">interior</span>
                        <span className=" font-bowldyOneSC leading-none lg:text-[230px] md:text-[150px] text-7xl md:mx-24 mx-8">interior</span>
                    </div>

                    <div className="absolute top-0 py-0 animate-marquee2 whitespace-nowrap">
                        <span className=" font-bowldyOneSC leading-none lg:text-[230px] md:text-[150px] text-7xl md:mx-24 mx-8">interior</span>
                        <span className=" font-bowldyOneSC leading-none lg:text-[230px] md:text-[150px] text-7xl md:mx-24 mx-8">interior</span>
                        <span className=" font-bowldyOneSC leading-none lg:text-[230px] md:text-[150px] text-7xl md:mx-24 mx-8">interior</span>
                        <span className=" font-bowldyOneSC leading-none lg:text-[230px] md:text-[150px] text-7xl md:mx-24 mx-8">interior</span>
                        <span className=" font-bowldyOneSC leading-none lg:text-[230px] md:text-[150px] text-7xl md:mx-24 mx-8">interior</span>
                    </div>
                </motion.div>
                <div className="flex md:justify-center items-center lg:gap-20 mx-4"> 
                        <motion.div variants={fromRight}>
                            <motion.button 
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className='text-zinc-200 text-lg bg-amber-400 font-alata text-zinc-950 font-extrabold rounded-full h-44 w-44 hidden lg:block'>
                                    PRODUCTS
                            </motion.button>
                        </motion.div>
                        <motion.span variants={fromLeft} className="font-bowldyOneSC leading-none lg:text-[230px] md:text-[150px] text-7xl z-0">decor</motion.span>
                </div>
            </div>
            <motion.div variants={fromBottom} className="flex flex-col w-4 absolute my-12 bottom-8 right-8 md:right-16 block lg:hidden">
                    <motion.p 
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className='text-lg leading-none font-alata text-zinc-100 font-extrabold -rotate-90'>
                            SCROLL DOWN
                    </motion.p>
                    <FaArrowDown/>
            </motion.div>
        </motion.div>
    );
}

export default Hero;

// style={{
//     backgroundImage: `url(${hero})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat'
// }}