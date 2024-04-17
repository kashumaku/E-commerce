import { Outlet, useNavigate } from "react-router-dom";
import Topbar from "../components/topbar";
import AdminMenu from "../components/adminMenu";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/usercontext";
import Dashboard from "./adminpages/dashboard";


const AdminDashBoard = () => {

    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(() => {
        const isAdmin = () => {
            !(user?.role === 'admin') && navigate('/')
        }
        user?.user && isAdmin()
    }, [])

    return (
        <div className="flex h-[100vh] overflow-hidden">
            <AdminMenu />
            <div className="w-full">
                <Topbar />
                <hr />
                <Outlet />
            </div>
        </div>
    );
}

export default AdminDashBoard;