import { motion } from "framer-motion";
import heroImage from '../assets/img/hero.jpg';

const bout = {
    animate: {
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.5,
        },
    },
};

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

function About() {
    return (
        <motion.div variants={bout} initial="initial" animate="animate" className="relative text-zinc-100">
            <motion.div variants={fromBottom} className="h-96 w-full overflow-hidden flex">
                <div className="flex flex-col absolute inset-0 items-center justify-center">
                    <h2 className="font-bowldyOneSC lg:text-[200px] text-5xl leading-none">ABOUT US</h2>
                    <hr className="w-5/6 mb-8"/>
                    <p className="font-semibold font-alata text-center text-wrap">LOREM IPSUM DOLOR SIT AMET, SUSPENDISSE RHONCUS METUS
                        ET ANTE DICTUM TEMPUS LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. 
                        ET ANTE DICTUM TEMPUS. ET ANTE DICTUM.
                    </p>
                </div>
                <img src={heroImage} alt="this" className='w-full w-full object-cover'/>
            </motion.div>
        </motion.div>
    );
}

export default About;