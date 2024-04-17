import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartcountercontext';
import { UserContext } from '../context/usercontext';

import { useContext, useEffect, useState } from 'react';
import MyCart from './mycart';
import axios from 'axios';
import CategoryMenu from './categoryMenu';

import '../style/category.css'
const Navbar = () => {
    const { cartCount, setCartCount } = useContext(CartContext)
    const { user, setUser } = useContext(UserContext)
    const [showCart, setShowCart] = useState(false)
    useEffect(() => {
        const getCartCount = async () => {

            try {
                const response = (await axios.get(`http://localhost:5001/api/cart/getCart/${user?.user?.id}`))
                setCartCount(response.data.length)
            } catch (err) {
                console.log(err.message);
            }
        }
        user?.user && getCartCount()
    }, [user])

    const handelLogout = () => {
        localStorage.removeItem('access_token')
        setUser({})
    }
    return (
        <div className="relative bg-gray-300 flex justify-between">
            <ul className="hidden md:flex gap-6 px-8 py-2 items-center">
                <li><Link to="/">Home</Link></li>
                <li className='category'>Categories
                    <CategoryMenu />
                </li>
                <li><Link to="/ourstore">Store</Link></li>
                <li>Contact</li>
                <li><Link to="/news">Blogs</Link></li>
                {user?.role === "admin" && <li><Link to='/admin'>Dashboard</Link></li>}
            </ul>

            <div className=" flex gap-2 items-center m-2 max-md:w-full ">
                <div className='flex items-center h-[30px] '>
                    <input type="search" placeholder="Search..." className='px-2 py-1 outline-none w-full ' />
                    <span className='flex justify-center items-center w-16 h-full bg-[#0a141e]'>
                        <FaSearch fill='white' className='cursor-pointer' />
                    </span>
                </div>
                {user?.user?.profile ? <img src={user.user.profile} alt='' className='w-[50px] h-[50px] rounded-full' /> : <span className='ml-4'><FaUser size={30} /></span>}
                {user?.role ? <button onClick={handelLogout}>Logout</button> : <Link to="/login">Login</Link>}
                <p onClick={() => setShowCart(true)}
                    className='relative flex mx-4 ' >
                    <FaShoppingCart size={30} fill='#007210' />
                    {user.role && <span className='absolute left-5 bottom-4 bg-red-600 w-5 h-5 rounded-full flex items-center justify-center text-white'>{cartCount}</span>}
                </p>
            </div>

            {showCart && <MyCart setShowCart={setShowCart} />}


        </div>
    );
}

export default Navbar;