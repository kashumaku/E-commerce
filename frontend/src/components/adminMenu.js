import { Link } from "react-router-dom";
import { RiDashboardLine, RiLogoutBoxLine } from "react-icons/ri";
import { GrChapterAdd, GrUnorderedList } from "react-icons/gr";
import { IoStorefrontOutline } from "react-icons/io5";
import { LuPanelLeftClose } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
const AdminMenu = () => {
    return (
        <div className=" h-[100vh] bg-gray-500  w-[250px] relative text-white">
            <div className=" m-2 py-2 shadow-lg flex flex-col items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShPmMW4zYgQpmjO50llMv0x0rkzNWhqUIsnA&usqp=CAU" alt=""
                    className="w-[100px] rounded-full" />
                <h1 className="text-2xl font-bold">Welcome Admin</h1>
            </div>
            <ul className="flex flex-col gap-6 p-8  absolute left-0 z-10" >
                <Link to="/admin" className=" flex items-center gap-2  hover:w-full hover:bg-orange-500 duration-[0.5s] overflow-hidden "
                >
                    <span><RiDashboardLine size={30} /></span>
                    <span className="px-2 py-1 ">Dashboard</span>
                </Link>
                <Link to="/admin/addproduct" className="flex items-center gap-2  hover:w-full hover:bg-orange-500 duration-[0.5s] overflow-hidden "
                >
                    <span> <GrChapterAdd size={30} /></span>
                    <span className="px-2 py-1 whitespace-nowrap">Add Product</span>
                </Link>
                <Link to="/admin/ourstore" className="flex items-center gap-2  hover:w-full hover:bg-orange-500 duration-[0.5s] overflow-hidden "
                >
                    <span><IoStorefrontOutline size={30} /></span>
                    <span className="px-2 py-1 whitespace-nowrap">Our Store</span>
                </Link>
                <Link to="/admin/orders" className="flex items-center gap-2  hover:w-full hover:bg-orange-500 duration-[0.5s] overflow-hidden "
                >
                    <span><GrUnorderedList size={30} /></span>
                    <span className="px-2 py-1 "
                    >Orders</span>
                </Link>
                <Link to="/admin/orders" className="flex items-center gap-2  hover:w-full hover:bg-orange-500 duration-[0.5s] overflow-hidden "
                >
                    <span><FaRegUser size={30} /></span>
                    <span className="px-2 py-1 ">Users</span>
                </Link>
                <Link to="/" className="flex items-center gap-2  hover:w-full hover:bg-orange-500 duration-[0.5s] overflow-hidden "
                >
                    <span><LuPanelLeftClose size={30} /></span>
                    <span className="px-2 py-1 whitespace-nowrap">Close Dashboard</span>
                </Link>
                <Link to="/" className="flex items-center gap-2  hover:w-full hover:bg-orange-500 duration-[0.5s] overflow-hidden "
                >
                    <span><RiLogoutBoxLine size={30} /></span>
                    <span className="px-2 py-1 ">Logout</span>
                </Link>

            </ul>
        </div>
    );
}

export default AdminMenu;