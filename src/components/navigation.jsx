import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";

//Variants
const navigate = {
    animate: {
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.3,
        },
    },
};

const fromTop = {
    initial: {
        y: -500,
    },
    animate: {
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
        }
    }
}


function Navigation(){
    return(
        <motion.div 
            variants={navigate}
            initial="initial"
            animate="animate"
            className="z-20 font-alata absolute w-full  top-0 bg-zinc-950 backdrop-filter backdrop-blur-md bg-opacity-40"
            >
            <nav className="mx-4 py-4">
                <div className="flex flex-wrap text-neutral-200 justify-between items-center">
                    <motion.div variants={fromTop} className="text-3xl lg:text-xl xl:text-2xl 2xl:text-4xl md:px-8">
                        <h1><span className="text-amber-400 font-pacifico font-medium">Lilibetz</span>  <span className="font-bowldyOneSC ">FURNITURE</span></h1>
                    </motion.div>
                    {/* <motion.button
                        variants={fromTop}
                        className="block md:hidden text-2xl"
                        type="button"
                        data-collapse-toggle="navbar-default"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                        >
                        <IoMenu/>
                    </motion.button> */}
                    <div className="hidden md:block px-8"  id="navbar-default">
                        <ul className="flex space-x-4">
                            <motion.li variants={fromTop} className="font-bold text-md xl:text-lg 2xl:text-lg">HOME</motion.li>
                            <motion.li variants={fromTop} className="font-bold text-md xl:text-lg 2xl:text-lg">ABOUT</motion.li>
                            <motion.li variants={fromTop} className="font-bold text-md xl:text-lg 2xl:text-lg">PRODUCTS</motion.li>
                            <motion.li variants={fromTop} className="font-bold text-md xl:text-lg 2xl:text-lg">CONTACTS</motion.li>
                            <motion.li variants={fromTop} className="font-bold text-md xl:text-lg 2xl:text-lg">YARD</motion.li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
            {/*   */}
        </motion.div>
    )
}

export default Navigation;