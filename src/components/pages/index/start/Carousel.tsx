'use client'
import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import Dots from './Dots'

const images = ['/start/1.png', '/gallery/8 марта (2).jpg', '/start/2.jpg']

const Carousel = () => {
    const [current, setCurrent] = useState(0)

    const translate = -current * 100

    useEffect(() => {
        const timer = setInterval(() => {
            if (current === (images.length - 1)) {
                setCurrent(0)
            }
            else {
                next()
            }
        }, 5000)
        return () => clearInterval(timer)
    })

    const next = () => {
        if (current < images.length - 1) {
            setCurrent(current + 1)
        }
    }

    const prev = () => {
        if (current > 0) {
            setCurrent(current - 1)
        }
    }

    return (
        <Box className="absolute w-screen h-screen overflow-hidden top-0 left-0">
            <Box className="w-[300vw] h-full flex">
                {images.map((image, key) =>
                    <Image
                        key={key}
                        alt='Стартовые фото'
                        priority
                        width={1920}
                        height={1080}
                        src={image}
                        className="object-cover w-full h-full transition-transform duration-500 -z-10 brightness-50"
                        style={{
                            transform: `translateX(${translate}%)`,
                        }}
                    />
                )}
            </Box>
            <Dots current={current} length={images.length} setCurrent={setCurrent} />
        </Box>
    )
}

export default Carousel