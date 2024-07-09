import { Modal, Box, IconButton } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Arrow } from '@/components/icons/UI'
import { TSetBool } from '@/globalTypes'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const ImageViewer = ({
    images, open, setOpen, current
}: {
    images: string[], open: boolean, setOpen: TSetBool, current: number
}
) => {
    const settings = {
        class: "image-slider",
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: current || 0,
        dots: true,
        nextArrow: (
            <Arrow anchor='right' />
        ),
        prevArrow: (
            <Arrow anchor='left' />
        ),
    }

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box
                className='outline-none w-screen h-screen absolute grid gap-4 bg-white'
            >
                <IconButton
                    onClick={() => setOpen(false)}
                    size='large'
                    sx={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        zIndex: 999,
                    }}
                >
                    <CloseIcon sx={{ fontSize: 35 }} color='action' />
                </IconButton>
                <Box className='w-screen h-screen'>
                    <Slider {...settings}>
                        {images.map((image, index) =>
                            <Box key={index} sx={{ width: '90vw !important' }} className='relative px-10 outline-none h-[90vh]'>
                                <Image
                                    alt='Фото в слайдере'
                                    src={image}
                                    fill
                                    className='object-contain p-10'
                                />
                            </Box>
                        )}
                    </Slider>
                </Box>
            </Box>
        </Modal >
    )
}

export default ImageViewer