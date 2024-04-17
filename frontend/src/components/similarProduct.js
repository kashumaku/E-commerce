import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SimilarProduct = ({ category }) => {
    const [similarProduct, setSimilarProduct] = useState([])
    useEffect(() => {
        const getSimilarProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/api/product/similar/${category}`)
                setSimilarProduct(response.data);
            } catch (err) {
                console.log(err.message);
            }
        }
        getSimilarProducts()
    }, [])
    return (
        <div className="m-4 ">
            <h1 className="text-xl font-bold flex justify-center mb-2">Similar Products</h1>
            <div className="grid grid-cols-2 gap-4">
                {similarProduct.map(cat => (
                    <div key={cat._id} className="flex flex-col border-2 h-[210px] w-[200px] items-center">
                        <img src={cat.thumbnail} alt="" width={90} className="h-[100px]" />
                        <p className="flex flex-col gap-2">
                            <span>{cat.productName}</span>
                            <span>Price: ETB {cat.price}</span>
                            <Link to={`/product/detail/${cat._id}`} className="bg-[#012442] px-4 py-1 text-white rounded-md">Shop now</Link>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SimilarProduct;