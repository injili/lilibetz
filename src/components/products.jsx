import { Card } from "./card";
import Bed from '../assets/img/bed.jpg';
import Coffee from '../assets/img/coffee.jpg';
import Dining from '../assets/img/dining.jpg';
import Sofa from '../assets/img/sofa.jpg';
import { useScroll } from "framer-motion";
import { useRef } from "react";

const products = [
    {
        id: 1,
        title: "sofas",
        alt: "The sofas",
        description: "Discover our extensive range of comfortable and stylish sofas, designed to enhance your living space with both elegance and coziness.",
        src: Sofa,
        color: "#fbbf24",
        tcolor: "#ffffff"
    },
    {
        id: 2,
        title: "dining sets",
        alt: "The Dining Sets",
        description: "Explore our collection of elegant dining sets, crafted to make every meal a special occasion and complement your dining area beautifully.",
        src: Dining,
        color: "#e5e5e5",
        tcolor: "#242424"
    },
    {
        id: 3,
        title: "coffee tables",
        alt: "The coffee tables",
        description: "Find the perfect coffee table to complete your living room decor, offering both functionality and a touch of sophistication.",
        src: Coffee,
        color: "#fbbf24",
        tcolor: "#ffffff"
    },
    {
        id: 4,
        title: "beds",
        alt: "The Beds",
        description: "Experience luxurious comfort with our premium beds, meticulously designed to provide you with a restful and rejuvenating night's sleep.",
        src: Bed,
        color: "#e5e5e5",
        tcolor: "#242424"
    },
  ]

export default function Products() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    return (
        <div ref={container} className="lgmt-8 lg:mb-8">
            {
                products.map( (product, i) => {
                    const targetScale = 1 - ( (products.length - i) * 0.05);
                    return <Card key={product.id} product={product} i={i} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
                })
            }
        </div>
    )
}