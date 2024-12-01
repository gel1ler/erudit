'use client'
import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import Dots from './Dots'

const images = ['/start/1.webp', '/groups/6.jpg', '/start/2.jpg']

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
        }, 10000)
        return () => clearInterval(timer)
    })

    const next = () => {
        if (current < images.length - 1) {
            setCurrent(current + 1)
        }
    }

    return (
        <Box className="absolute w-[90vw] h-[85vh] m-auto overflow-hidden top-[7vh] left-0 right-0 bottom-0 rounded-[50px]">
            <Box className="w-[300vw] h-full flex">
                {images.map((image, key) =>
                    <Image
                        key={key}
                        alt='Стартовые фото'
                        priority
                        width={1920}
                        height={1080}
                        src={image}
                        className="object-cover w-screen h-full -z-10"
                        style={{
                            transform: `translateX(${translate}%)`,
                            transition: 'transform 1.2s ease-in-out'
                        }}
                    />
                )}
            </Box>
            <Dots current={current} length={images.length} setCurrent={setCurrent} />
        </Box>
    )
}

export default Carousel