import basket from '../assets/img/suppermarket_basket.png'
import { MdOutlineMail, MdLocalPhone } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
        <div className="h-screen bg-[#012442] flex items-center justify-center">
            <div className='bg-[#b1bdd7] h-fit w-screen sm:w-[500px] m-3 flex justify-center rounded-lg'>
                <div className='flex items-end'>
                </div>
                <div className='flex flex-col items-center justify-center p-2'>
                    <h1 className='uppercase text-lg font-bold text-[#012442] '>Well come to kirchat suppermarket</h1>
                    <h2 className='capitalize mb-8'>ship smarter today</h2>
                    <form className='flex flex-col gap-4 text-[#012442]  w-full p-4'>

                        <div className='flex items-center bg-white gap-2 rounded-md border border-[#012442] overflow-hidden'>
                            <FaUserTie size={40} fill='#012442' />
                            <input placeholder='First name' className='w-full outline-none p-1 ' />
                        </div>
                        <div className='flex items-center bg-white gap-2 rounded-md border border-[#012442] overflow-hidden'>
                            <FaUserTie size={40} fill='#012442' />
                            <input placeholder='Last name' className='w-full outline-none p-1 ' />
                        </div>

                        <div className='flex items-center bg-white gap-2 rounded-md border border-[#012442] overflow-hidden'>
                            <MdLocalPhone size={40} fill='#012442' />
                            <input placeholder='Phone Number' className='w-full outline-none p-1 ' />
                        </div>
                        <div className='flex items-center bg-white gap-2 rounded-md border border-[#012442] overflow-hidden'>
                            <MdOutlineMail size={40} fill='#012442' />
                            <input placeholder='Email' className='w-full outline-none p-1 ' />
                        </div>

                        <div className='flex items-center bg-white gap-2 rounded-md border border-[#012442] overflow-hidden'>
                            <RiLockPasswordLine size={40} fill='#012442' />
                            <input type='password' placeholder='Password' className='w-full outline-none p-1 ' />
                        </div>
                        <div className='flex items-center bg-white gap-2 rounded-md border border-[#012442] overflow-hidden'>
                            <RiLockPasswordLine size={40} fill='#012442' />
                            <input type='password' placeholder='Confirm Password' className='w-full outline-none p-1 ' />
                        </div>


                        <button className='bg-green-800 px-6 py-1 text-white rounded-md'>Sign Up</button>
                    </form>
                    <p className='mt-4'>Already have an account? <Link to="/login" className='text-blue-500'>Login</Link></p>

                </div>
            </div>
        </div>
    );
}

export default SignUp;