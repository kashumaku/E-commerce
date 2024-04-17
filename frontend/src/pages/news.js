import { Link } from "react-router-dom";
import { news } from "../assets/data/newsdata";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Topbar from "../components/topbar";

const News = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <div className="px-4 py-8">
                <h1 className="flex justify-center text-2xl font-bold mb-4">Our latest news</h1>
                <div className="grid grid-cols-3 gap-4">
                    {news.map(n => (
                        <div key={n.id} className='flex flex-col gap-2'>
                            <img src={n.thumbnail} alt="" className='h-[170px] w-full object-cover' />
                            <p className='text-gray-500'>{n.date}</p>
                            <h1 className='text-xl font-bold'>Lorem ipsum, dolor sit amet</h1>
                            <p>{n.news}</p>
                            <Link to={`/news/detail/${n.id}`} className="bg-[#012442] px-2 py-1 text-white">Read more</Link>
                        </div>

                    ))}
                    {news.map(n => (
                        <div key={n.id} className='flex flex-col gap-2'>
                            <img src={n.thumbnail} alt="" className='h-[170px] w-full object-cover' />
                            <p className='text-gray-500'>{n.date}</p>

                            <h1 className='text-xl font-bold'>{n.title}</h1>
                            <p>{n.news}</p>
                            <Link to={`/news/detail/${n.id}`} className="bg-[#012442] px-2 py-1 text-white">Read more</Link>
                        </div>

                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default News;