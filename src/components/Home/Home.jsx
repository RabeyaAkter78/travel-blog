import NavBar from "../NavBar/NavBar";
import Banner from "./Banner/Banner";
import Faq from "./Faq/Faq";
import LeatestBlog from "./LeatestBlogs/LeatestBlog";
import TourGuide from "./TourGuide/TourGuide";
import TripInspiration from "./TripInspiration/TripInspiration";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourGuide></TourGuide>
            <TripInspiration></TripInspiration>
            <LeatestBlog></LeatestBlog>
            <Faq></Faq>
        </div>
    );
};

export default Home;