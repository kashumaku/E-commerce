import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { CartContext } from '../context/cartcountercontext'
import { UserContext } from '../context/usercontext'
const MyCart = ({ setShowCart }) => {
    const [cartData, setCartData] = useState([])
    const [quantity, setQuantity] = useState([])
    const { setCartCount } = useContext(CartContext)
    const { user } = useContext(UserContext)

    useEffect(() => {
        const getCart = async () => {
            try {
                const userId = user?.user?.id
                const response = await axios.get(`http://localhost:5001/api/cart/getcart/${userId}`)
                setCartData(response.data)
            } catch (err) {
                console.log(err.message);
            }
        }
        getCart()
    }, [])
    const filterCanceledItems = (id) => {
        const filteredCart = cartData.filter((c) => c._id !== id)
        setCartData(filteredCart)
        setCartCount(pre => pre - 1)
    }

    const handelCancel = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5001/api/cart/delete/${id}`)
            if (response)
                filterCanceledItems(id)

        } catch (err) {
            console.log(err.message);
        }
    }
    return (

        <div className='absolute bg-[#012442] text-white  top-12 z-10 right-0 
        w-screen md:w-[40vw] h-[100vh] pb-[100px] overflow-scroll  '>
            <button onClick={() => setShowCart(false)} className="text-red-600 bg-white font-bold py-2 px-4 absolute top-1 right-1 rounded-full">X</button>
            {cartData.length === 0 && <p className='text-2xl font-bold text-red-400 p-8'>You have no product in your cart</p>}
            {cartData.map((cart) => (
                <div key={cart._id} className='flex items-center  gap-6 border-b-2 border-white p-4'>
                    <img src={cart.thumbnail} alt="" width={60} />
                    <p className='flex flex-col gap-3'>
                        <span className='capitalize text-lg'>{cart.productName}</span>
                        <span>Quantity: <input type="number" value={cart.quantity} onChange={(e) => setQuantity(e.target.value)} className='w-12 text-black' /></span>
                        <span>price: ETB {cart.quantity * cart.price}</span>

                    </p>
                    <button className='bg-[#010066] rounded-sm px-4 py-1'>Check out</button>
                    <button onClick={() => handelCancel(cart._id)} className='bg-red-600 rounded-sm px-4 py-1'>Cancel</button>
                </div>
            ))}

        </div>
    );
}

export default MyCart;