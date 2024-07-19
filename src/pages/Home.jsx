import Hero from "../components/hero";
import Products from "../components/products";
import Contacts from "../components/contact";
import { useEffect } from "react";
import Lenis from "lenis";
import About from "../components/about";

export default function Home() {

    useEffect( () => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <div>
            <Hero/>
            <About/>
            <Products/>
            <Contacts/>
        </div>
    );
}