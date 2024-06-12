// import { Card } from "./card";
// import Bed from '../assets/img/beds.jpg';
import Coffee from '../assets/img/coffee.jpg';
import Dining from '../assets/img/dining.jpg';
import Sofa from '../assets/img/sofa.jpg';

// const data = [
//     {
//         id: '1',
//         img: Sofa,
//         title: 'SOFAS',
//         alt: 'THE SOFAS'
//     },
//     {
//         id: '2',
//         img: Coffee,
//         title: 'COFFEE TABLES',
//         alt: 'THE COFFEE TABLES'
//     },
//     {
//         id: '3',
//         img: Dining,
//         title: 'DINING SETS',
//         alt: 'THE DINING SETS'
//     },
//     {
//         id: '4',
//         img: Bed,
//         title: 'BEDS',
//         alt: 'THE BEDS'
//     },
// ];

// export default function Products() {
//     return (
//         <div>
//             <div className="m-4 text-center">
//                 <h2 className="font-semibold leading-none lg:text-[400px] text-7xl">products</h2>
//             </div>
//             <div className="bg-zinc-950 pt-8 flex flex-wrap justify-center gap-8">
//                 {data.map(item=>(
//                     <Card item={item} key={item.id}/>
//                 ))}
//             </div>

//         </div>
//     );
// }


export default function Products() {
    return(
        <div className="p-8 bg-amber-400">
            <div className="mb-4 text-center">
                <h2 className="font- leading-none lg:text-[200px] text-7xl font-bowldyOneSC">our products</h2>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-1 lg:grid-cols-3">
                <li>
                    <a href="#" className="group relative block">
                    <img
                        src={Dining}
                        alt=""
                        className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 rounded-lg"
                    />

                    <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                        <h3 className="text-9xl font-bowldyOneSC  text-white">Dining Sets</h3>
                    </div>
                    </a>
                </li>

                <li>
                    <a href="#" className="group relative block">
                    <img
                        src={Coffee}
                        alt=""
                        className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 rounded-lg"
                    />

                    <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                        <h3 className="text-9xl font-bowldyOneSC  text-white">Coffee Tables</h3>
                    </div>
                    </a>
                </li>

                <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                    <a href="#" className="group relative block">
                    <img
                        src={Sofa}
                        alt=""
                        className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 rounded-lg"
                    />

                    <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                        <h3 className="text-9xl font-bowldyOneSC  text-white">Sofa Sets</h3>
                    </div>
                    </a>
                </li>
            </ul>
        </div>
    );
}