import GalleryCard from './galleryCard';


import One from '../assets/img/1.avif';
import Two from "../assets/img/2.avif";
import Three from "../assets/img/3.avif";
import Four from "../assets/img/4.avif";
import Five from "../assets/img/5.avif";
import Six from "../assets/img/6.avif";
import Seven from "../assets/img/7.avif";
import Eight from "../assets/img/8.avif";
import Nine from "../assets/img/9.avif";
import Ten from "../assets/img/10.avif";
import Eleven from "../assets/img/11.avif";
import Twelve from "../assets/img/12.avif";
import Thirteen from "../assets/img/13.avif";
import Fourteen from "../assets/img/14.avif";
import Fifteen from "../assets/img/15.avif";


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
    },
    {
        id:4,
        src: Four,
        alt: "Image of our product",
        loader: "LFM*26009G9E4;Dh%1j[.AMxDiWB"
    },
    {
        id:5,
        src: Five,
        alt: "Image of our product",
        loader: "LKM%$bRhyEbX.TkEV[M{?woye-oJ"
    },
    {
        id:6,
        src: Six,
        alt: "Image of our product",
        loader: "LLJGHHyYF?N{.TEN#QNHuixb,oX9"
    },
    {
        id:7,
        src: Seven,
        alt: "Image of our product",
        loader: "LFD8^N2]}9AX%3t8R*oz%#$*OZsD"
    },
    {
        id:8,
        src: Eight,
        alt: "Image of our product",
        loader: "LZIOFLofWCxa~qt7ozt7x^odxtfl"
    },
    {
        id:9,
        src: Nine,
        alt: "Image of our product",
        loader: "LnKTY@M_XTR%?^M|jFjFt,oLn$j["
    },
    {
        id:10,
        src: Ten,
        alt: "Image of our product",
        loader: "LJNAh%.8T1IA~qM{MdtR?bRORPM{"
    },
    {
        id:11,
        src: Eleven,
        alt: "Image of our product",
        loader: "LIFhxL170=tS~WJDOvK6%$r;ivJV"
    },
    {
        id:12,
        src: Twelve,
        alt: "Image of our product",
        loader: "LpI#u.t7WXWY_NM{WBjYxuWVbIWV"
    },
    {
        id:13,
        src: Thirteen,
        alt: "Image of our product",
        loader: "LFHw_s*J7iD%04Di#6yDUHRm;1RP"
    },
    {
        id:14,
        src: Fourteen,
        alt: "Image of our product",
        loader: "L79i@_xu-=-A~BI=M|t7?b%2-CNt"
    },
    {
        id:15,
        src: Fifteen,
        alt: "Image of our product",
        loader: "L7FOr}0Lw0xt}@?HS^r?0fT200s;"
    },
]

export default function Gallery() {
    return(
        <div className='pt-12 text-neutral-200 w-full'>
            <div className=''>
            <div className='m-2 p-2 md:m-8 md:p-8 flex flex-col justify-center items-center'>
                <h1 className='py-4 md:py-12 text-5xl md:text-8xl text-center font-bold font-alata'>welcome to our collection</h1>
                <p className='text-center font-bold font-poiretOne max-w-[1200px]'>Discover our premium furniture and decor, crafted with precision for every style. From cozy sofas to elegant dining sets and luxurious beds, our collection has everything you need to transform your living spaces. Explore our curated selection and find the perfect pieces for your home.</p>
            </div>
            </div>
            <div className='grid justify-items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] gap-4 mx-2 p-2 pb-8 md:mx-8 md:p-8 overflow-hidden'>
                    { 
                        images.map( (image) => {
                            return <GalleryCard key={image.id} image={image} />
                        })
                    }
                </div>
            </div>
            <div className='m-2 p-2 md:m-8 md:p-8 '>
                <p className='text-center font-bold font-poiretOne '>Elevate your home with our beautiful and functional furniture. Visit us in-store or shop online to experience the Lilibetz FURNITURE difference. Your dream home is just a click away!</p>
            </div>
        </div>
    );
}