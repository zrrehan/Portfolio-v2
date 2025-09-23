import { use } from "react";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./carousel.css"
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { FaGithub, FaLink } from "react-icons/fa";
import ImageCarousel from "./ImageCarousel";
import { TypeAnimation } from "react-type-animation";

function Carousel({dataPromise}) {
    const data = use(dataPromise);
    return(
        <div className='max-w-[1150px] rounded-2xl w-[80vw] min-h-[600px] flex mx-auto'>
            <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
                {
                    data.map((singleData, index) => {
                        const technologies = []
                        for (let singleTech of singleData.technologies) {
                            technologies.push(`${singleTech}`);
                            technologies.push(1000)
                        }
                        console.log(singleData.name)
                        console.log(technologies)
                    return <SwiperSlide>
                        <div className='flex flex-col-reverse lg:flex-row gap-4 px-8 items-center justify-center h-full '>
                            <div className='lg:w-[50%] space-y-4'>
                                <p className='text-xl lg:text-3xl'>{singleData.title}</p>
                                <h1 className='text-6xl header-text'>{singleData.name}</h1>
                                <p className='lg:text-xl'>{singleData.description}</p>
                                <p className='header-text monoton-regular text-3xl font-semibold'>
                                    <TypeAnimation
                                        className=" monoton-regular"
                                        sequence={technologies}
                                        speed={50}
                                        style={{  }}
                                        repeat={Infinity}
                                    ></TypeAnimation>
                                </p>
                                <div className='divider'></div>
                                <div className='flex gap-7'>
                                    <a href={singleData.github} target="_blank" className='tooltip' data-tip="Github Repo"><FaGithub size={44} /></a>
                                    <a href={singleData.liveSite} target="_blank" className='tooltip' data-tip="Live Link"><FaLink size={44} /></a>
                                </div>
                            </div>
                            <div className='lg:w-[40%] w-[70vw]'>
                                <ImageCarousel images={[singleData.image1, singleData.image2, singleData.image3]}/>
                            </div>

                        </div>
                    </SwiperSlide>
                })
                }
            </Swiper>
        </div>
    )
}
export default Carousel;