import { categorydata } from "../assets/data/categorydata";
import iphone from '../assets/img/iphone.png'
const Category = () => {
    return (
        <div className="flex flex-col items-center my-12 px-2">
            <h1 className="text-3xl font-bold mb-12 uppercase">Shop with category</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                <div className="relative bg-[#012442] row-span-2 hover:scale-110 duration-[0.4s]">
                    <img src={iphone} alt="" className="h-full w-full object-cover" />
                    <div className="absolute top-14 left-2">
                        <span className="text-yellow-500 ">Supper charged for pros</span>
                        <h1 className="text-2xl text-white font-bold">iPad S13+ pro.</h1>
                        <p className="text-white flex gap-4">
                            <span className="line-through">$1000</span>
                            <span>$899</span>
                        </p>
                        <button className="bg-green-500 px-3 py-1">Explore</button>
                    </div>
                </div>
                {categorydata.map(cat => {
                    return (
                        <div key={cat.id} className="flex items-center gap-2 border-2 border-gray-200 text-[#012442] p-2 hover:scale-110 duration-[0.4s] "
                            style={{ background: cat.bg }}>
                            <img src={cat.thumbnail} alt="" className="w-[120px] object-cover" />
                            <div>
                                <h2>{cat.category}</h2>
                                <button className="bg-[#012442] px-4 py-1 text-white rounded-md">Explore</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Category;