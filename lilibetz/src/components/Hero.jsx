import { Carousel } from 'flowbite-react';
import hero1 from './assets/img/hero1.jpg';
import hero2 from './assets/img/hero2.jpg';
import hero3 from './assets/img/hero3.jpg';

export default function Hero() {
  return (
    <div className="mb-0 mx-8 h-[36rem] sm:h-[30rem] xl:h-[36rem] 2xl:h-[36rem">
      <Carousel indicators={false}>
        <div>
          <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${hero1})` }}>
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l h-full">
            </div>
            <div  className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
              <div className="max-w-xl text-left">
                <h1 className="text-3xl font-extrabold sm:text-5xl">
                  Let us find your
                  <strong className="block font-extrabold text-amber-400">
                    Forever Home.
                  </strong>
                </h1>
                <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                </p>
                <div className="mt-8 flex flex-wrap gap-4 text-center">
                  <a href="#" className="block w-full rounded-lg bg-amber-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-amber-400 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                    Get Started
                  </a>
                  <a href="#" className="block w-full rounded-lg bg-white px-12 py-3 text-sm font-medium text-amber-500 shadow hover:text-amber-400 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${hero2})` }}>
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l h-full">
            </div>
            <div  className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
              <div className="max-w-xl text-left">
                <h1 className="text-3xl font-extrabold sm:text-5xl">
                  Let us find your
                  <strong className="block font-extrabold text-amber-400">
                    Forever Home.
                  </strong>
                </h1>
                <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                </p>
                <div className="mt-8 flex flex-wrap gap-4 text-center">
                  <a href="#" className="block w-full rounded-lg bg-amber-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-amber-400 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                    Get Started
                  </a>
                  <a href="#" className="block w-full rounded-lg bg-white px-12 py-3 text-sm font-medium text-amber-500 shadow hover:text-amber-400 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${hero3})` }}>
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l h-full">
            </div>
            <div  className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
              <div className="max-w-xl text-left">
                <h1 className="text-3xl font-extrabold sm:text-5xl">
                  Let us find your
                  <strong className="block font-extrabold text-amber-400">
                    Forever Home.
                  </strong>
                </h1>
                <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                </p>
                <div className="mt-8 flex flex-wrap gap-4 text-center">
                  <a href="#" className="block w-full rounded-lg bg-amber-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-amber-400 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                    Get Started
                  </a>
                  <a href="#" className="block w-full rounded-lg bg-white px-12 py-3 text-sm font-medium text-amber-500 shadow hover:text-amber-400 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Carousel>
    </div>
  )
}
