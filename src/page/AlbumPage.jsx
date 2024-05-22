import Navbar from "../components/Navbar.jsx";
import Carousel from "../components/Carousel.jsx";
import Time from "../components/Time.jsx";

import Footer from "../components/Footer.jsx";
import GoTop from "../components/GoTop.jsx";
import Album from "../components/Album.jsx";
import MobileNavigation from "../components/MobileNavigation.jsx";

const AlmbumPage = () => {
    return (
        <>
            <div>
                <Navbar />
                <GoTop />
                <MobileNavigation />
                <Album />
                <Footer />
            </div>
        </>
    );
};

export default AlmbumPage;
