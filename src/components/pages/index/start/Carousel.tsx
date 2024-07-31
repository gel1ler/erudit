'use client'
import React from 'react'
import { Box } from '@mui/material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import Arrow from '@/components/icons/UI';
import Image from 'next/image';

const arr = ['/1.png', '/1.png', '/1.png']

const Carousel = () => {
    const settings = {
        className: "absolute top-0 left-0 w-screen h-screen flex justify-center overflow-hidden",
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    }

    return (
        <Slider {...settings} className='absolute top-0 left-0 w-screen h-screen flex justify-center overflow-hidden'>
            {arr.map((img, index) => (
                <Image
                    key={index}
                    src={img}
                    fill
                    alt='Background'
                    className='object-cover -z-50 brightness-75'
                />
            ))}
        </Slider>
    )
}

export default Carousel