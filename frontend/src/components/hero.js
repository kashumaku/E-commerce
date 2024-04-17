import Navbar from "./navbar";
import herobg from '../assets/img/hero1.png'
import { herodata } from '../assets/data/herodata'
import { useState } from "react";
const Hero = () => {
    const [slide, setSlide] = useState(0)

    setTimeout(() => {
        setSlide((pre) => pre === herodata.length - 1 ? 0 : pre + 1)

    }, 6000)

    return (
        <div className="bg-[#0a141e] px-8 pt-2 relative max-md:h-[40vh]">
            <Navbar />
            <div className="flex text-white justify-center items-center  ">
                <div className="w-[300px] overflow-hidden ">
                    <div className={`my-4 flex duration-[0.4s]`}
                        style={{ transform: `translatex(${-slide * 300}px)` }}
                    >
                        {herodata.map(hero => (
                            <div key={hero.id} className="w-[300px] flex-shrink-0 ">
                                <h3 className="text-orange-500">{hero.discount} % discount</h3>
                                <h1 className="md:text-3xl font-bold">{hero.name}</h1>
                                <p>{hero.disc}</p>
                                <button className="bg-green-500 px-4 py-1 mt-4 cursor-pointer border-none">Shop now</button>
                            </div>
                        ))}
                    </div>
                </div>
                <img src={herobg} alt="" className="max-md:absolute right-[-80px] bottom-0" />
            </div>

        </div>
    );
}

export default Hero;