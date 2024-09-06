import { useRef } from "react";
import PropTypes from 'prop-types';
import { 
    wrap,
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";


function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        striffness: 400
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    })

    const x = useTransform(baseX, (v) => `${wrap(-25, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 500);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className='overflow-hidden -tracking-2 leading-none m-0 whitespace-nowrap flex flex-nowrap w-screen'>
            <motion.div className='flex whitespace-nowrap flex flex-nowrap lg:text-[130px] md:text-[150px] text-7xl' style={{ x }}>
                <span className="mr-24 font-bowldyOneSC z-10">{children}</span>
                <span className="mr-24 font-bowldyOneSC z-10">{children}</span>
                <span className="mr-24 font-bowldyOneSC z-10">{children}</span>
                <span className="mr-24 font-bowldyOneSC z-10">{children}</span>
                <span className="mr-24 font-bowldyOneSC z-10">{children}</span>
            </motion.div>
        </div>
    );
}

ParallaxText.propTypes = {
    children: PropTypes.string.isRequired,
    baseVelocity: PropTypes.number,
};

ParallaxText.defaultProps = {
    baseVelocity: 100,
};

export default ParallaxText;