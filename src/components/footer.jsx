import { FaRegCopyright } from "react-icons/fa";
import { motion } from "framer-motion";

const getFullYear = () => (new Date().getFullYear());

const foot = {
    animate: {
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.3,
        },
    },
};

const fromBottom = {
    initial: {
        y: 500,
    },
    animate: {
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
        }
    }
}

export default function Footer() {
    return (
        <div>
            <motion.div variants={foot} initial="initial" animate="animate" className="overflow-hidden m-4 p-8 bg-zinc-950 text-zinc-50 rounded-lg">
                <div className="flex flex-wrap items-center justify-between  gap-y-4">
                    <span className="flex items-center gap-4 text-xl lg:text-xl xl:text-2xl 2xl:text-4xl font-semibold">
                        <div>
                            <motion.h1 variants={fromBottom}>
                                <span className="text-amber-400 font-pacifico font-medium">
                                    Lilibetz
                                </span>  FURNITURE
                            </motion.h1>
                        </div>
                    </span>
                    <motion.div variants={fromBottom} className="flex flex-wrap items-center gap-2 text-sm">
                        <FaRegCopyright/>
                        <p> {getFullYear()} - Lilibetz FURNITURE</p>
                        <p>from INJILI, with Love</p>
                    </motion.div>
                    <ul className="flex gap-2 md:gap-4 text-sm font-bold lg:gap-6">
                        <motion.li variants={fromBottom}>HOME</motion.li>
                        <motion.li variants={fromBottom}>ABOUT</motion.li>
                        <motion.li variants={fromBottom}>PRODUCTS</motion.li>
                        <motion.li variants={fromBottom}>CONTACTS</motion.li>
                        <motion.li variants={fromBottom}>YARD</motion.li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}