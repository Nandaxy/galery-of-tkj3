import { Routes, Route } from "react-router-dom";
import GaleryPage from "./page/GaleryPage.jsx";
import AlbumPage from "./page/AlbumPage.jsx";
import AlbumTagPage from "./page/AlbumTagPage.jsx";
import ImageDetailPage from "./page/ImageDetailPage.jsx";
import NotFoundPage from "./page/NotFoundPage.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<GaleryPage />} />
                <Route path="/album" element={<AlbumPage />} />
                <Route path="/p/:id" element={<ImageDetailPage />} />
                <Route path="/album/:tag" element={<AlbumTagPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
