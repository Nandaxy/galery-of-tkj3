import React from "react";
import { useParams } from "react-router-dom";

import NotFoundPage from "../page/NotFoundPage.jsx";

import { ImageData } from "../components/ImageData";
import ImageDetail from "../components/ImageDetail";
import Navbar from "../components/Navbar.jsx";

const ImageDetailPage = () => {
    const { id } = useParams();
    const image = ImageData.find(img => img.id == id);

    console.log(image);

    if (!image) {
        return <NotFoundPage message={"Data Tidak Ditemukan!"} />;
    }

    return (
        <>
            <Navbar />
            <ImageDetail image={image} />
        </>
    );
};

export default ImageDetailPage;
