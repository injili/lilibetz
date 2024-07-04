import GalleryCard from './galleryCard';


import One from '../assets/img/1.jpg'
import Two from "../assets/img/2.jpg"
import Three from "../assets/img/3.jpg"

const images = [
    {
        id:1,
        src: One,
        alt: "Image of our product",
        loader: "LRIOOr?bE1xY_N_3V?Rl?bxvM{n$"
    },
    {
        id:2,
        src: Two,
        alt: "Image of our product",
        loader: "LVI4eWOF%#m+tlxasmR*ysx]ogNH"
    },
    {
        id:3,
        src: Three,
        alt: "Image of our product",
        loader: "LdJa.sMdIUj?_NIUWXs:?bRkM{f+"
    }
]

export default function Gallery() {
    return(
        <div>
            { 
                images.map( (image) => {
                    return <GalleryCard key={images.id} image={image} />
                })
            }
        </div>
    );
};