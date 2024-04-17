import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion"
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import { useContext, useEffect, useState } from "react";
import SimilarProduct from "../components/similarProduct";
import axios from "axios";
import { CartContext } from "../context/cartcountercontext";
import { UserContext } from "../context/usercontext";
const ProductDetail = () => {
    const productId = useParams().id
    const [quantity, setQuantity] = useState(1)
    const [disableButton, setDisableButton] = useState("dec")
    const [notification, setNotification] = useState("")
    const [productDetail, setProductDetail] = useState({})
    const { setCartCount } = useContext(CartContext)
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(() => {
        const getProdutDetail = async () => {
            try {
                const response = await axios(`http://localhost:5001/api/product/detail/${productId}`)
                setProductDetail(response.data)
            } catch (err) {
                console.log(err.message);
            }
        }
        getProdutDetail()
    }, [productId])


    const handelQuantity = (incDec) => {
        if (incDec === 'dec' && quantity === 1)
            setDisableButton("dec")
        else if (incDec === "inc" && quantity === productDetail.quantity)
            setDisableButton("inc")
        else if (incDec === "inc")
            setQuantity(quantity + 1)
        else if (incDec === "dec")
            setQuantity(quantity - 1)
    }

    const notify = (notification) => {
        setNotification(notification)
        setTimeout(() => {
            setNotification("")
        }, 4000)
    }
    const handelAddToCart = async (quantity) => {
        if (!user?.user) {
            navigate('/login')
            return
        }
        const userId = user?.user?.id
        const { _id, ...filterdata } = productDetail
        const cartData = { ...filterdata, quantity: quantity, productId: productDetail._id, userId }
        try {
            const response = await axios.post("http://localhost:5001/api/cart/addtocart", cartData)
            if (response) {
                notify(`${quantity} ${productDetail.productName} added to your cart `)
                response.data.operation === 'create' && setCartCount(pre => pre + 1)
            }
        } catch (err) {
            console.log(err.message);
        }
    }
    return (
        <div className="h-screen overflow-hidden">
            <Topbar />
            <Navbar />
            <div className="flex">
                <div className="flex-3 flex items-center border-2 h-[80vh] w-[60vw] m-4  ">
                    <div className="overflow-hidden h-[400px] w-[450px] ">
                        <img src={productDetail.thumbnail} alt="" className="h-full w-full object-cover hover:scale-125 duration-[1s] " />
                    </div>
                    <div className="w-full border-l-2 h-full p-8 flex flex-col gap-6 relative">
                        {/* notification */}
                        <span className="absolute top-1 right-0 px-4 text-orange-600   w-full">{notification}</span>
                        <motion.h2
                            initial={{ scale: 1 }}
                            animate={{ scale: [1.1, 1.2, 1.3, 1.4, 1.3, 1.2, 1.1], rotateX: [45] }}
                            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                            className="flex justify-center font-bold text-2xl text-orange-600"
                        >{productDetail.discount}% off</motion.h2>
                        <h1 className="capitalize text-xl font-bold">{productDetail.productName}</h1>
                        <div className="grid gap-4">
                            <span>Single price : ETB {productDetail.price}</span>
                            <span>Total price : ETB {productDetail.price * quantity}</span>
                        </div>
                        <div className="flex gap-3 items-center">
                            <button onClick={() => handelQuantity("dec")}
                                className={`text-3xl flex items-center border-2 px-2 `}>-</button>
                            <span className="text-lg ">{quantity}</span>
                            <button onClick={() => handelQuantity("inc")} className="text-3xl flex items-center border-2 px-2">+</button>
                        </div>
                        <button onClick={() => handelAddToCart(quantity, productDetail.category)} className="bg-green-600 py-1 w-[40%] text-white">Add to cart</button>
                        <Link to="/ourstore" className="flex justify-center bg-black py-1 w-[40%] text-white">Cancel</Link>
                    </div>
                </div>

                {productDetail.category && <SimilarProduct category={productDetail.category} />}


            </div>
        </div>
    );
}

export default ProductDetail;