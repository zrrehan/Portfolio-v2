import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import "./carousel.css"

function ImageCarousel({ images }) {
    if(!images) {
        return null
    }
    return(
        <div className='shadow-2xl  rounded-3xl p-1'>
            <Swiper
                spaceBetween={30}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    images.map((singelImage) => {
                        return <SwiperSlide>
                            <img src={singelImage} className='rounded-3xl w-full'></img>
                        </SwiperSlide>
                    })
                }
            </Swiper>
            
        </div>
    )
}

export default ImageCarousel