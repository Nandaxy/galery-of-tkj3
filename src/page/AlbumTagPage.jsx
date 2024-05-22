import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Carousel from "../components/Carousel.jsx";
import Time from "../components/Time.jsx";

import Footer from "../components/Footer.jsx";
import GoTop from "../components/GoTop.jsx";
import MobileNavigation from "../components/MobileNavigation.jsx";

import AlbumTag from "../components/AlbumTag.jsx";

const AlbumTagPage = () => {
    const { tag } = useParams();
    return (
        <>
            <div>
                <Navbar />
                <GoTop />
                <MobileNavigation />
                <AlbumTag tag={tag}/>
                <Footer />
            </div>
        </>
    );
};

export default AlbumTagPage;
