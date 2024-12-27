'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card'
import Slider from 'react-slick'
import Arrow from '@/components/icons/UI';
import { TCard } from '@/globalTypes';

const Carousel = ({ cards }: { cards: TCard[] }) => {
    const settings = {
        className: "center groups-clider h-full",
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
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '50px',
                }
            },
            // {
            //     breakpoint: 1400,
            //     settings: {
            //         slidesToShow: 2,
            //         centerPadding: '50px',
            //     }
            // },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0px',
                    nextArrow: (
                        <Arrow anchor='right' sm />
                    ),
                    prevArrow: (
                        <Arrow anchor='left' sm />
                    ),
                }
            }
        ]
    }

    return (
        <Slider {...settings}>
            {cards.map((card, index) => (
                <Card key={index} index={index} card={card} />
            ))}
        </Slider>
    )
}

export default Carousel