import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import { ImageSlider } from "./ImageSlider.js";

const Carousel = () => {
    const imageSlide = ImageSlider;

    return (
        <div className="w-full h-fit">
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                loop={true}
                pagination={{
                    clickable: true
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {imageSlide.map((imageUrl, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={imageUrl}
                            alt={`Slide ${index + 1}`}
                            className="h-48 md:h-80 w-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
