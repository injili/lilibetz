import Hero from "../components/hero";
import Products from "../components/products";
import About from "../components/about";

export default function Home() {
    return (
        <div>
            <Hero/>
            <About/>
            <Products/>
        </div>
    );
}