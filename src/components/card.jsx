import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';

export const Card = ({ product, i, progress, range, targetScale }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className='h-screen flex items-center justify-center sticky top-0'>
            <motion.div
                style={{backgroundColor: product.color, scale, top:`calc(-5vh + ${i * 25}px)`}}
                className='flex flex-row gap-0 p-8 rounded-sm relative h-3/4 w-4/5'
                >
                <div className='aspect-square w-full h-full relative overflow-hidden rounded-sm'>
                    <motion.div style={{scale: imageScale}} className='h-ful w-full'>
                        <img src={product.src} alt={product.alt} className='object-cover'/>
                    </motion.div>
                </div>
                <div className='p-8 flex flex-col items-start justify-center'
                style={{color: product.tcolor,}}>
                    <h3 className='py-8 font-bowldyOneSC text-[100px] leading-none'>{product.title}</h3>
                    <p className='text-bold font-alata'>{product.description}</p>
                </div>
            </motion.div>
        </div>
    );
}

Card.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        tcolor: PropTypes.string.isRequired,
    }).isRequired,
    i: PropTypes.isRequired,
    range: PropTypes.isRequired,
    targetScale: PropTypes.isRequired,
    progress: PropTypes.isRequired,
}