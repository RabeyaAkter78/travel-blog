import NavBar from "../NavBar/NavBar";
import Banner from "./Banner/Banner";
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
        </div>
    );
};

export default Home;