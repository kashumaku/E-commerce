import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import News from "./pages/news";
import NewsDetail from "./pages/newsdetail";
import ProductDetail from "./pages/productdetail";
import Store from "./pages/store";
import AdminDashBoard from "./pages/admindashboard";
import AddProduct from "./pages/adminpages/addproduct";
import OurStore from "./pages/adminpages/ourstore";
import Orders from "./pages/adminpages/orders";
import PageNotFound from "./pages/404";
import Dashboard from "./pages/adminpages/dashboard";
import CartContextProvider from "./context/cartcountercontext";
import UserContextProvider from "./context/usercontext";
import Login from "./pages/login";
import SignUp from "./pages/signup";

const App = () => {
    return (
        <UserContextProvider>
            <CartContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/ourstore" element={<Store />} />
                        <Route path="/news/detail/:id" element={<NewsDetail />} />
                        <Route path="/product/detail/:id" element={<ProductDetail />} />
                        <Route path="/admin" element={<AdminDashBoard />} >
                            <Route path="" element={<Dashboard />} />
                            <Route path="/admin/addproduct" element={<AddProduct />} />
                            <Route path="/admin/ourstore" element={<OurStore />} />
                            <Route path="/admin/orders" element={<Orders />} />

                        </Route>
                        <Route path="*" element={<PageNotFound />} />

                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
        </UserContextProvider>
    );
}

export default App;