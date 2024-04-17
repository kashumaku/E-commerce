import { categorydata } from "../assets/data/categorydata";
import { FaStar, FaRegStarHalfStroke, FaRegStar, FaRegBookmark } from "react-icons/fa6"; import { Link } from "react-router-dom";
const Featured = () => {

    return (
        <div className="relative w-[100vw]  flex flex-col ">
            <h1 className="text-4xl font-bold uppercase flex justify-center mb-4 ">Featured products</h1>
            <div className=" flex flex-wrap justify-center gap-[20px] px-4 pb-16  ">
                {categorydata.map(featured => (
                    <div key={featured.id}
                        className="bg-[#eee] w-full max-w-[400px] h-[300px] text-white   overflow-hidden relative">
                        <img src={featured.thumbnail} alt="" className="h-full w-full hover:scale-150 duration-[0.4s] object-cover" />
                        <div className="absolute top-6 right-4 flex flex-col items-center gap-2">
                            <FaRegBookmark fill="#012442" className="cursor-pointer" />
                            <Link to={`/product/detail/${featured.id}`} className="bg-[#012442] px-4 py-1 text-white rounded-md">Shop now</Link>
                            <p className="flex">
                                <FaStar fill="orange" />
                                <FaStar fill="orange" />
                                <FaStar fill="orange" />
                                <FaRegStarHalfStroke fill="orange" />
                                <FaRegStar fill="orange" />
                            </p>

                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}

export default Featured;