// import { Card } from "./card";
// import Bed from '../assets/img/beds.jpg';
import Coffee from '../assets/img/coffee.jpg';
import Dining from '../assets/img/dining.jpg';
import Sofa from '../assets/img/sofa.jpg';

export default function Products() {
    return(
        <div className="p-1 bg-amber-400">
            <div className="text-center">
                <h2 className="leading-none lg:text-[100px] text-7xl font-bowldyOneSC">products</h2>
            </div>
            <ul className="mt-2 grid grid-cols-1 gap-1 lg:grid-cols-3">
                <li>
                    <a href="#" className="group relative block">
                    <img
                        src={Dining}
                        alt=""
                        className="aspect-square w-full object-cover group-hover:scale-90 transition duration-500 rounded-lg"
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                        <h3 className="text-7xl font-bowldyOneSC  text-white">Dining Sets</h3>
                    </div>
                    </a>
                </li>

                <li>
                    <a href="#" className="group relative block">
                    <img
                        src={Coffee}
                        alt=""
                        className="aspect-square w-full object-cover transition duration-500 group-hover:scale-90 rounded-lg"
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                        <h3 className="text-7xl font-bowldyOneSC  text-white">Coffee Tables</h3>
                    </div>
                    </a>
                </li>

                <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                    <a href="#" className="group relative block">
                    <img
                        src={Sofa}
                        alt=""
                        className="aspect-square w-full object-cover transition duration-500 group-hover:scale-90 rounded-lg"
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                        <h3 className="lg:text-[200px] font-bowldyOneSC  text-white">Sofas</h3>
                    </div>
                    </a>
                </li>
            </ul>
        </div>
    );
}