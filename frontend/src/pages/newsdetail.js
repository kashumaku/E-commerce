import { Link, useParams } from "react-router-dom";
import { news } from "../assets/data/newsdata";
import Topbar from "../components/topbar";

const NewsDetail = () => {
    const newsId = useParams()
    const newsDetail = news.filter((nd) => nd.id === Number(newsId.id))[0]
    return (
        <>
            <Topbar />
            <div className="w-[70vw] m-auto">
                <img src={newsDetail.thumbnail} alt="" className="h-[70vh] w-full object-cover" />
                <span>{newsDetail.date}</span>
                <h1 className='text-xl font-bold'>{newsDetail.title}</h1>
                <p>{newsDetail.detail}</p>
                <Link to='/news' className="bg-[#012442] px-2 py-1 text-white">Back</Link>
            </div>
        </>
    );
}

export default NewsDetail;