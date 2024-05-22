import React, { useState, useEffect, useRef } from "react";
import ImageModal from "./ImageModal";
import { ImageData } from "./ImageData.js";

const Galery = () => {
    const images = ImageData;

    const [sortedImages, setSortedImages] = useState([]);
    const [sortOrder, setSortOrder] = useState("latest");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        handleSort("latest");
    }, []);

    const handleSort = order => {
        setSortOrder(order);
        if (order === "latest") {
            setSortedImages(
                [...images].sort((a, b) => new Date(b.date) - new Date(a.date))
            );
        } else {
            setSortedImages(
                [...images].sort((a, b) => new Date(a.date) - new Date(b.date))
            );
        }
    };

    const groupedImages = sortedImages.reduce((acc, image) => {
        const date = new Date(image.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long"
        });
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(image);
        return acc;
    }, {});

    const dateRefs = useRef([]);
    const galleryRef = useRef(null);
    const [activeDate, setActiveDate] = useState("");
    const [galleryReached, setGalleryReached] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (
                galleryRef.current &&
                galleryRef.current.getBoundingClientRect().top <= 0
            ) {
                setGalleryReached(true);
            } else {
                setGalleryReached(false);
            }

            if (galleryReached) {
                for (let i = 0; i < dateRefs.current.length; i++) {
                    const element = dateRefs.current[i];
                    if (element && element.getBoundingClientRect().top <= 0) {
                        setActiveDate(element.getAttribute("data-date"));
                    }
                }
            } else {
                setActiveDate("");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [galleryReached]);

    const openModal = image => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="px-4 py-6 border-t">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Gallery</h1>
                <div>
                    <select
                        className="px-4 py-2 rounded-md bg-gray-800 text-white shadow-gray-100/10 shadow-lg transition-all hover:shadow-none hover:bg-gray-900"
                        value={sortOrder}
                        onChange={e => handleSort(e.target.value)}
                    >
                        <option value="latest">Terbaru</option>
                        <option value="oldest">Terlama</option>
                    </select>
                </div>
            </div>
            <div
                className={`sticky top-0 bg-[#161b22] z-10 py-2 ${
                    !galleryReached ? "hidden" : ""
                }`}
            >
                <h2 className="text-lg font-semibold">{activeDate}</h2>
            </div>
            <div ref={galleryRef}>
                {Object.keys(groupedImages).map((date, index) => (
                    <div
                        key={index}
                        data-date={date}
                        ref={el => (dateRefs.current[index] = el)}
                    >
                        <h2 className="text-lg font-semibold mb-4 border-t pt-1 border-gray-800">
                            {date}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
                            {groupedImages[date].map((image, idx) => (
                                <div
                                    key={idx}
                                    className="relative"
                                    onClick={() => openModal(image)}
                                >
                                    <img
                                        loading="lazy"
                                        src={image.src}
                                        alt={`Gallery ${idx + 1}`}
                                        className="w-full h-full object-cover rounded-md cursor-pointer"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <ImageModal
                image={selectedImage}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </div>
    );
};

export default Galery;
