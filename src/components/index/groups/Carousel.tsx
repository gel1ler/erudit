'use client'
import React from 'react'
import { Box } from '@mui/material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card'
import Slider from 'react-slick'
import Arrow from '@/components/icons/UI';
import { TCard } from '@/globalTypes';

const Carousel = ({ cards }: { cards: TCard[] }) => {
    const settings = {
        className: "center prod-slider",
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '15%',
        dots: true,
        nextArrow: (
            <Arrow anchor='right' />
        ),
        prevArrow: (
            <Arrow anchor='left' />
        ),
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    centerPadding: '10px',
                }
            },
        ]
    }

    return (
        <Slider {...settings}>
            {cards.map((card, index) => (
                <Card key={index} title={card.title} text={card.text} img={card.img} />
            ))}
        </Slider>
    )
}

export default Carousel