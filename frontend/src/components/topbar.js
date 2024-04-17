import { useContext, useEffect } from 'react';
import axios from 'axios'
import logo from '../assets/img/logo.png'
import { MdLocationOn, MdOutlineMail } from 'react-icons/md'
import { UserContext } from '../context/usercontext';
const Topbar = () => {
    const { setUser } = useContext(UserContext)
    useEffect(() => {
        const access_token = localStorage.getItem('access_token')
        const getRole = async () => {
            const response = await axios.get("http://localhost:5001/api/user/checkrole", {
                headers: { authorization: access_token }
            })
            response?.data?.role && setUser(response?.data)
        }
        getRole()
    }, [])
    return (
        <div className="flex px-6  justify-between items-center ">
            <div className='flex gap-4 items-center'>
                <img src={logo} alt="" className='w-[50px] h-[50px] rounded-full' />
                <span>Kirchat suppermarket</span>
            </div>
            <div className="flex gap-8">
                <span className='hidden md:flex gap-2 items-center'><MdLocationOn /> Addis ababa mexico st. 123456</span>
                <span className='hidden md:flex gap-2 items-center'><MdOutlineMail />kirchat@gmail.com</span>
            </div>
        </div>
    );
}

export default Topbar;