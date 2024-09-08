            {/* <motion.div variants={fromBottom} className="flex flex-col w-4 absolute my-12 bottom-4 right-8 md:right-16 block lg:hidden">
                    <motion.p 
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className='text-lg leading-none font-alata text-zinc-100 font-extrabold -rotate-90'>
                            SCROLL DOWN
                    </motion.p>
                    <FaArrowDown/>
            </motion.div> */}

// style={{
//     backgroundImage: `url(${hero})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat'
// }}
                {/* <motion.div variants={fromLeft} className="z-10 relative flex overflow-x-hidden overflow-y-hidden">
                    <div className="py-0 animate-marquee whitespace-nowrap">
                        <span className=" font-bowldyOneSC leading-none lg:text-[230px] md:text-[150px] text-7xl md:mx-24 mx-8">interior</span>
                        <span className=" font-bowldyOneSC leading-none lg:text-[230px] md:text-[150px] text-7xl md:mx-24 mx-8">interior</span>
                        <span className=" font-bowldyOneSC leading-none lg:text-[230px] md:text-[150px] text-7xl md:mx-24 mx-8">interior</span>
                        <span className=" font-bowldyOneSC leading-none lg:text-[230px] md:text-[150px] text-7xl md:mx-24 mx-8">interior</span>
                        <span className=" font-bowldyOneSC leading-none lg:text-[230px] md:text-[150px] text-7xl md:mx-24 mx-8">interior</span>
                    </div>

                    <div className="absolute top-0 py-0 animate-marquee2 whitespace-nowrap">
                        <span className=" font-bowldyOneSC leading-none lg:text-[230px] md:text-[150px] text-7xl md:mx-24 mx-8">interior</span>
                        <span className=" font-bowldyOneSC leading-none lg:text-[230px] md:text-[150px] text-7xl md:mx-24 mx-8">interior</span>
                        <span className=" font-bowldyOneSC leading-none lg:text-[230px] md:text-[150px] text-7xl md:mx-24 mx-8">interior</span>
                        <span className=" font-bowldyOneSC leading-none lg:text-[230px] md:text-[150px] text-7xl md:mx-24 mx-8">interior</span>
                        <span className=" font-bowldyOneSC leading-none lg:text-[230px] md:text-[150px] text-7xl md:mx-24 mx-8">interior</span>
                    </div>
                </motion.div> */}


// const fromLeft = {
//     initial: {
//         x: -2000,
//     },
//     animate: {
//         x: 0,
//         transition: {
//             ease: [0.6, 0.01, -0.05, 0.95],
//             duration: 1,
//         }
//     }
// }




{/* <div style={{ display: imageLoaded ? 'none' : 'inline'}}className="rounded-md col-span-1 h-[264px] w-[396px]">
                <Blurhash
                hash={image.loader}
                width={420}
                height={264}
                resolutionX={35}
                resolutionY={35}
                punch={1}
                />
            </div> */}


    // const [imageLoaded, setImageLoaded] = useState(false)

    // useEffect(() => {
    //     const img = new Image()
    //     img.onload = () => {
    //         setImageLoaded(true)
    //     }
    //     img.src = image.src

    // }, [image.src])

    // import { useState, useEffect } from "react";
// import { Blurhash } from "react-blurhash";

// import { Card } from "./card";
// import Bed from '../assets/img/bed.avif';
// import Coffee from '../assets/img/coffee.avif';
// import Dining from '../assets/img/dining.avif';
// import Sofa from '../assets/img/sofa.avif';
// import { useScroll } from "framer-motion";
// import { useRef } from "react";

// const products = [
//     {
//         id: 1,
//         title: "sofas",
//         alt: "The sofas",
//         description: "Discover our extensive range of comfortable and stylish sofas, designed to enhance your living space with both elegance and coziness.",
//         src: Sofa,
//         color: "#fbbf24",
//         tcolor: "#ffffff"
//     },
//     {
//         id: 2,
//         title: "dining sets",
//         alt: "The Dining Sets",
//         description: "Explore our collection of elegant dining sets, crafted to make every meal a special occasion and complement your dining area beautifully.",
//         src: Dining,
//         color: "#e5e5e5",
//         tcolor: "#242424"
//     },
//     {
//         id: 3,
//         title: "coffee tables",
//         alt: "The coffee tables",
//         description: "Find the perfect coffee table to complete your living room decor, offering both functionality and a touch of sophistication.",
//         src: Coffee,
//         color: "#fbbf24",
//         tcolor: "#ffffff"
//     },
//     {
//         id: 4,
//         title: "beds",
//         alt: "The Beds",
//         description: "Experience luxurious comfort with our premium beds, meticulously designed to provide you with a restful and rejuvenating night's sleep.",
//         src: Bed,
//         color: "#e5e5e5",
//         tcolor: "#242424"
//     },
//   ]

// export default function Products() {
//     const container = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: container,
//         offset: ['start start', 'end end']
//     })

//     return (
//         <div ref={container} className="lg:mb-8">
//             {
//                 products.map( (product, i) => {
//                     const targetScale = 1 - ( (products.length - i) * 0.05);
//                     return <Card key={product.id} product={product} i={i} theprogress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
//                 })
//             }
//         </div>
//     )
// }