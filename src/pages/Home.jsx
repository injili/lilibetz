import Hero from "../components/hero";
import Products from "../components/products";
import Contacts from "../components/contact";
import { useEffect } from "react";
import Lenis from "lenis";
import About from "../components/about";
import { useLocation } from "react-router-dom";
import Toaction from "../components/toaction";

export default function Home() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

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
            <Toaction/>
        </div>
    );
}