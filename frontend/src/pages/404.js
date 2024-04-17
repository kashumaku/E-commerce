import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="h-screen w-screen bg-black flex flex-col justify-center items-center">
            <h1 className="text-red-500 text-3xl font-bold">404 </h1>
            <p className="text-white">...oops page not found</p>
            <span className="text-white">Go to <Link to="/" className="text-blue-500">Home</Link></span>
            <hr className="w-screen text-white" />

        </div>
    );
}

export default PageNotFound;