import NavBar from "../NavBar/NavBar";
import Banner from "./Banner/Banner";
import TourGuide from "./TourGuide/TourGuide";
import TripInspiration from "./TripInspiration/TripInspiration";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourGuide></TourGuide>
            <TripInspiration></TripInspiration>
        </div>
    );
};

export default Home;