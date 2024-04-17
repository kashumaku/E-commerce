import { useState } from 'react';
import basket from '../assets/img/suppermarket_basket.png'
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [notification, setNotification] = useState("")

    const notify = (message) => {
        setNotification(message)
        setTimeout(() => {
            setNotification("")
        }, 4000)
    }
    const handelLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:5001/api/user/login", { email, password })
            if (!response?.data?.success)
                notify(response.data.message)
            else {
                localStorage.setItem("access_token", response.data.data.access_token)
                navigate("/")
            }
        } catch (err) {
            console.log(err.message);

        }
    }
    return (
        <div className="h-screen bg-[#012442] flex items-center justify-center">
            <div className='bg-[#b1bdd7] h-[480px] sm:h-[80vh] w-screen sm:w-[400px] m-3  flex rounded-lg relative '>


                <div className='w-full flex flex-col items-center justify-center relative '>
                    {notification && <p className='absolute top-8 text-red-500 text-xl'>{notification}</p>}

                    <h1 className='uppercase text-2xl  font-bold text-[#012442] '>Well come to  kirchat<br /> suppermarket</h1>
                    <h2 className='capitalize mb-8'>ship smarter today</h2>
                    <form className='flex flex-col gap-4 text-[#012442] w-full p-4'>
                        <div className='flex items-center bg-white gap-2 rounded-md border border-[#012442] overflow-hidden'>
                            <MdOutlineMail size={40} fill='#012442' />
                            <input placeholder='Email' className='w-full outline-none p-2 text-lg'
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='flex items-center bg-white gap-2 rounded-md border border-[#012442] overflow-hidden'>
                            <RiLockPasswordLine size={40} fill='#012442' />
                            <input type='password' placeholder='Password' className='w-full outline-none p-2 text-lg '
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='flex gap-5'>
                            <p><input type="checkbox" /> Remember Me</p>
                            <Link to="" className='text-blue-500 underline'>forgot password?</Link>
                        </div>
                        <button className='bg-[#012442] px-6 py-1 text-white rounded-md'
                            onClick={handelLogin} >Login
                        </button>
                    </form>
                    <p className='mt-4'>Have no account? <Link to="/signup" className='text-blue-500'>sign Up</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;