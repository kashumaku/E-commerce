import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { CgMenuGridR, CgMoreAlt } from "react-icons/cg";
import { FaRankingStar } from "react-icons/fa6";
import { GiStaryu } from "react-icons/gi";
import { BiMale } from "react-icons/bi";
import { BiFemale } from "react-icons/bi";
import { FcElectronics } from "react-icons/fc";
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const OurStore = () => {
    const [allProducts, setAllProducts] = useState([])
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        try {
            const getProducts = async () => {
                const response = await axios.get("http://localhost:5001/api/admin/products", { headers: { authorization: localStorage.getItem("access_token") } })
                if (!response.data.data)
                    navigate("/login")
                setProducts(response.data.data) // To hold filterd products and initial fetched products
                setAllProducts(response.data.data)
            }
            getProducts()
        } catch (err) {
            console.log(err.message);
        }
    }, [])

    const handelfilter = (filterKey, value) => {
        const filtered = allProducts.filter(p => p[filterKey] === value)
        if (filterKey === "all")
            setProducts(allProducts)
        else
            setProducts(filtered)
    }
    return (
        <div className='w-full h-screen pb-12 overflow-y-scroll' >
            <div >
                <h1 className="flex justify-center text-3xl text-[#012242]">Kirchat Supper Market Store</h1>
                <ul className='flex justify-around bg-gray-500 p-4 text-white'>
                    <li onClick={() => handelfilter("all")} className="flex items-center gap-2 hover:bg-blue-500 py-1 px-2 rounded-lg">
                        <CgMenuGridR />
                        All
                    </li>
                    <li onClick={() => handelfilter("featured", true)} className="flex items-center gap-2 hover:bg-blue-500 py-1 px-2 rounded-lg">
                        <FaRankingStar />
                        Featured
                    </li>
                    <li onClick={() => handelfilter("special", true)} className="flex items-center gap-2 hover:bg-blue-500 py-1 px-2 rounded-lg">
                        <GiStaryu />
                        Special</li>
                    <li onClick={() => handelfilter("category", "male clothe")} className="flex items-center gap-2 hover:bg-blue-500 py-1 px-2 rounded-lg">
                        <BiMale />
                        Male
                    </li>
                    <li onClick={() => handelfilter("category", "female clothe")} className="flex items-center gap-2 hover:bg-blue-500 py-1 px-2 rounded-lg">
                        <BiFemale />
                        Female
                    </li>
                    <li onClick={() => handelfilter("category", "electrinics")} className="flex items-center gap-2 hover:bg-blue-500 py-1 px-2 rounded-lg">
                        <FcElectronics />
                        Electronics
                    </li>
                    <li className="flex items-center gap-2 hover:bg-blue-500 py-1 px-2 rounded-lg">
                        <CgMoreAlt />
                        More
                    </li>
                </ul>
            </div>

            <div className=''>
                {products?.map(product => (
                    <div key={product._id} className='border-b border-blue-900 flex items-end gap-2 p-4 mt-2 relative'>
                        <img src={product.thumbnail} alt="" className='w-[100px] h-[100px]' />
                        <div className="w-[70vw] flex justify-around">
                            <div>
                                <h2>Name</h2>
                                <p>{product.productName}</p>
                            </div>
                            <div>
                                <h2>Price </h2>
                                <p>ETB {product.price}</p>
                            </div>
                            <div>
                                <h2>Quantity</h2>
                                <p>{product.quantity}</p>
                            </div>
                            <div>
                                <h2>Category</h2>
                                <p>{product.category}</p>
                            </div>
                            <div>
                                <h2>Special </h2>
                                <p>{product.special ? <span>True</span> : <span>False</span>}</p>

                            </div>
                            <div>
                                <h2>Featured</h2>
                                <p>{product.featured ? <span>True</span> : <span>False</span>}</p>

                            </div>
                        </div>
                        <div className="absolute top-2 right-3 flex gap-4">
                            <FaEdit size={30} fill="green" />
                            <MdDeleteForever size={30} fill="darkred" />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurStore;