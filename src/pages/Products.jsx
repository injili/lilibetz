import { Card } from "./card";
import Bed from '../assets/img/beds.jpg';
import Coffee from '../assets/img/coffees.jpg';
import Dining from '../assets/img/dinings.jpg';
import Sofa from '../assets/img/sofas.jpg';

const data = [
    {
        id: '1',
        img: Sofa,
        title: 'SOFAS',
        alt: 'THE SOFAS'
    },
    {
        id: '2',
        img: Coffee,
        title: 'COFFEE TABLES',
        alt: 'THE COFFEE TABLES'
    },
    {
        id: '3',
        img: Dining,
        title: 'DINING SETS',
        alt: 'THE DINING SETS'
    },
    {
        id: '4',
        img: Bed,
        title: 'BEDS',
        alt: 'THE BEDS'
    },
];

export default function Products() {
    return (
        <div>
            <div className="m-4 text-center">
                <h2 className="font-semibold leading-none lg:text-[400px] text-7xl">products</h2>
            </div>
            <div className="bg-zinc-950 pt-8 flex flex-wrap justify-center gap-8">
                {data.map(item=>(
                    <Card item={item} key={item.id}/>
                ))}
            </div>

        </div>
    );
}