import { useEffect, useState } from "react";
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

    const size = isHovered ? "300" : "40";

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen overflow-x-hidden bg-neutral-200" id="about">
            <motion.div
                className="mask h-screen w-full"
                animate={{
                    WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
                        mousePosition.y - size / 2
                    }px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ ease: "backOut", duration: 0.0 }}
            >
                <p className="font-alata text-3xl md:text-5xl text-center max-w-[1150px] font-semibold py-12 md:m-12 px-12 "
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                   Welcome to Lilibetz FURNITURE, where exceptional design meets unparalleled comfort.
                We specialize in crafting high-quality furniture and providing expert interior decoration services, covering everything from beds to sofas and more.
                </p>
            </motion.div>
            <div>
                <p className="font-alata text-3xl md:text-5xl text-center font-semibold 9y-12 max-w-[1150px] md:m-12 px-12">
                Welcome to <span className="text-amber-400">Lilibetz FURNITURE</span>, where exceptional design meets unparalleled comfort.
                We specialize in crafting high-quality furniture and providing expert interior decoration services, covering everything from beds to sofas and more.
                </p>
            </div>
        </div>
    );
};

export default About;