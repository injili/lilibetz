import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
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
            className="z-20 font-alata absolute w-full  top-0 bg-zinc-950"
            >
            <nav className="mx-4 py-4">
                <div className="flex flex-wrap text-neutral-200 justify-center md:justify-between items-center">
                    <div className="hidden md:block px-8"  id="navbar-default">
                        <ul className="flex space-x-4">
                            <Link to="/"><motion.li variants={fromTop} className="font-bold text-md xl:text-lg 2xl:text-lg">HOME</motion.li></Link>
                            <Link to="/products"><motion.li variants={fromTop} className="font-bold text-md xl:text-lg 2xl:text-lg">PRODUCTS</motion.li></Link>
                        </ul>
                    </div>
                    <motion.div variants={fromTop} className="text-3xl lg:text-xl xl:text-2xl 2xl:text-4xl md:px-8">
                        <Link to="/"><h1><span className="text-amber-400 font-pacifico font-medium">Lilibetz</span>  <span className="font-bowldyOneSC ">FURNITURE</span></h1></Link>
                    </motion.div>
                    <div className="hidden md:block px-8"  id="navbar-default">
                        <ul className="flex space-x-4">
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