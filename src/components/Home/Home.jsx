import NavBar from "../NavBar/NavBar";
import AboutUS from "./AboutUS/AboutUS";
import Banner from "./Banner/Banner";
import Faq from "./Faq/Faq";
import LeatestBlog from "./LeatestBlogs/LeatestBlog";
import Reviews from "./Reviews/Reviews";
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
            <Reviews></Reviews>
            <AboutUS></AboutUS>
        </div>
    );
};

export default Home;