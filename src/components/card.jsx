import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
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
                style={{scale, top:`calc(-5vh + ${i * 30}px)`}}
                className='flex lg:p-4 rounded-md lg:rounded-lg relative h-3/4 lg:h-auto lg:max-h-[800px] w-11/12 lg:w-9/12'
                >
                <div className='h-full lg:max-h-[740px] relative overflow-hidden rounded-md lg:rounde '>
                    <motion.div style={{scale: imageScale}} className='h-full lg:max-h-[740px] w-full'>
                        <img src={product.src} alt={product.alt} className='object-cover h-full md:h-auto'/>
                    </motion.div>
                </div>
                <div className='absolute p-2 md:p-4 w-full h-full bg-neutral-950 backdrop-filter bg-opacity-10 flex flex-col items-center justify-center'
                style={{color: product.color,}}>
                    <Link to='/products'><h3 className='lg:py-8 font-bowldyOneSC text-6xl lg:text-[100px] leading-none text-center'>{product.title}</h3></Link>
                    <p className='font-semibold font-alata text-3xl text-center leading none lg:w-8/12'>{product.description}</p>
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