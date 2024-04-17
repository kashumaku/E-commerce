import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Special = () => {
    const [specials, setSpecials] = useState([])
    useEffect(() => {
        const getSpecialProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5001/api/product/special")
                setSpecials(response.data)
            } catch (err) {
                console.log(err.message);
            }
        }
        getSpecialProducts()
    }, [])
    return (
        <div>
            <h1 className="flex justify-center text-3xl font-bold">SPECIAL PRODUCTS</h1>
            <div className="grid grid-cols-5 px-4 py-8 gap-4">
                {specials.map(special => (
                    <div key={special._id} className="border-2 flex items-center">
                        <img src={special.thumbnail} alt="" className="w-[150px]" />
                        <p className="flex flex-col"><span>{special.productName}</span>
                            <span>$200</span>
                            <Link to={`/product/detail/${special._id}`} className="bg-[#012442] px-2 py-1 text-white">Shop now</Link>
                        </p>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Special;