import Hero from "../components/hero";
import Products from "../components/products";
import About from "../components/about";
import Contacts from "../components/contact";

export default function Home() {
    return (
        <div>
            <Hero/>
            <Products/>
            <About/>
            <Contacts/>
        </div>
    );
}