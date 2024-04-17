
import { Link } from "react-router-dom";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import axios from 'axios'
import { specialdata } from "../assets/data/specialdata";

const Store = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5001/api/product/getProduct")
                setProducts(response.data.data)
            } catch (err) {
                console.log(err.message);
            }
        }
        getProducts()
    }, [])
    return (
        <>
            <Topbar />
            <Navbar />
            <div>
                <h1 className="text-3xl font-bold flex justify-center uppercase py-3">Our Store</h1>
                <div className="grid grid-cols-5 px-4 py-8 gap-4">
                    {products.map(product => (
                        <div key={product._id} className="border-2 flex items-center">
                            <img src={product.thumbnail} alt="" className="w-[150px]" />
                            <p className="flex flex-col">
                                <span>{product.productName}</span>
                                <span>{product.price} ETB</span>
                                <span>{product.discount}% off</span>
                                <Link to={`/product/detail/${product._id}`} className="bg-[#012442] px-2 py-1 text-white">Shop now</Link>
                            </p>

                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Store;