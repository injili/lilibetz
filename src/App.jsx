import Hero from "./components/hero";
import Navigation from "./components/navigation";
import Products from "./components/products";

function App() {
  return (
    <div className="font-DMsans text-zinc-950 bg-stone-100">
      <Navigation/>
      <Hero/>
      <Products/>
    </div>
  )
}

export default App;