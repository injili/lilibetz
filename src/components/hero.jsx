import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import imageThingy from '../assets/img/file.avif'
import ParallaxText from "./parallax";
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


const fromTop = {
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

const fromBottom = {
    initial: {
        y: 1000,
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
                    <motion.span variants={fromLeft} className="leading-none lg:text-[130px] md:text-[150px] text-7xl font-bowldyOneSC z-10 md:z-20">bespoke</motion.span>
                    <motion.span variants={fromLeft} className="lg:max-w-72 md:font-medium text-normal text-sm lg:text-right text-center font-alata z-20">
                        <p>We are Lilibetz FURNITURE, your premier nationwide furniture shop.
                             Explore our extensive collection and place your order today.
                              You also have the option to request a custom order to perfectly suit your needs.
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
                <motion.img variants={fromTop} src={imageThingy} decoding="async" type="avif" alt="the chair" className="absolute w-[350px] lg:w-[450px] z-0 md:z-10" />
                <motion.div variants={fromLeft} className="z-20">
                    <ParallaxText baseVelocity={-5}> interior </ParallaxText>
                </motion.div>
                <div className="flex md:justify-center items-center lg:gap-20 mx-4"> 
                        <motion.div variants={fromRight}>
                            <Link to="/products">
                                <motion.button 
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className='text-md bg-amber-400 font-alata text-zinc-950 font-extrabold rounded-full h-36 w-36 hidden lg:block'>
                                        VIEW PRODUCTS
                                </motion.button>
                            </Link>
                        </motion.div>
                        <motion.span variants={fromLeft} className="font-bowldyOneSC leading-none lg:text-[130px] md:text-[150px] text-7xl z-20">decor</motion.span>
                </div>
            </div>
            <div className="flex absolute bottom-12">
                    <motion.div variants={fromBottom} className='block lg:hidden'>
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

        </motion.div>
    );
}

export default Hero;