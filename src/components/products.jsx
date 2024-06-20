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
        description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
        src: Sofa,
        color: "#fbbf24",
        tcolor: "#ffffff"
    },
    {
        id: 2,
        title: "dining sets",
        alt: "The Dining Sets",
        description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rockyyryey.",
        src: Dining,
        color: "#e5e5e5",
        tcolor: "#242424"
    },
    {
        id: 3,
        title: "coffee tables",
        alt: "The coffee tables",
        description: "Though he views photography as a medium for san ambiguity—a certain tension—that lets the viewer find their own story within them.",
        src: Coffee,
        color: "#fbbf24",
        tcolor: "#ffffff"
    },
    {
        id: 4,
        title: "beds",
        alt: "The Beds",
        description: "Though he views photography as a medium for san ambiguity—a certain tension—that lets the viewer find their own story within them.",
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
        <div ref={container} className="mt-8 mb-8">
            {
                products.map( (product, i) => {
                    const targetScale = 1 - ( (products.length - i) * 0.05);
                    return <Card key={product.id} product={product} i={i} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
                })
            }
        </div>
    )
}