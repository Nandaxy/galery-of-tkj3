import Navbar from "../components/Navbar.jsx";
import Carousel from "../components/Carousel.jsx";
import Time from "../components/Time.jsx";
import Galery from "../components/Galery.jsx";
import Footer from "../components/Footer.jsx";
import GoTop from "../components/GoTop.jsx";
import MobileNavigation from "../components/MobileNavigation.jsx";

const GaleryPage = () => {
    return (
        <>
            <div>
                <Navbar />
                <GoTop />
                <MobileNavigation />
                <Time />
                <Carousel />
                <Galery />
                <Footer />
            </div>
        </>
    );
};

export default GaleryPage;
