import React, { useEffect, useState } from "react";
import './mask.css';
import { motion } from "framer-motion";

const About = () => {
    // define cursor coordinates
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    //define if mouse is hovered on element
    const [isHovered, setIsHovered] = useState(false);

    // define location of mouse
    useEffect(() => {
        const setFromEvent = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", setFromEvent);

        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, []);

    const size = isHovered ? "400" : "40";

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen overflow-x-hidden bg-neutral-200">
            <motion.div
                id="about"
                className="mask h-screen w-full"
                animate={{
                    WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
                        mousePosition.y - size / 2
                    }px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ ease: "backOut", duration: 0.0 }}
            >
                <p className="font-alata text-4xl md:text-7xl text-center font-semibold px-12 md:px-36 lg:px-44"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus metus et ante dictum tempus. Nulla pulvinar libero ut iaculis interdum. Vestibulum. Nulla pulvinar libero ut iaculis interdum.
                </p>
            </motion.div>
            <div>
                <p className="font-alata text-4xl md:text-7xl text-center font-semibold px-12 md:px-36 lg:px-44">
                    Mauris id sapien dui. <span className="text-amber-400">Morbi nisi ante,</span> convallis in lacus in, tempor cursus tellus. Aenean porttitor, lorem pretium tincidunt egestas, odio quam pulvinar arcu.  pellentesque ultricies arcu nisl enim. 
                </p>
            </div>
        </div>
    );
};

export default About;