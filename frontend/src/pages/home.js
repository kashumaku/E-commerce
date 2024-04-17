import Category from "../components/category";
import Featured from "../components/featured";
import Footer from "../components/footer";
import Hero from "../components/hero";
import LatestNews from "../components/latestnews";
import Services from "../components/services";
import Special from "../components/special";
import Topbar from "../components/topbar";

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Topbar />
            <Hero />
            <Services />
            <Category />
            <Featured />
            <Special />
            <LatestNews />
            <Footer />
        </div>
    );
}

export default Home;