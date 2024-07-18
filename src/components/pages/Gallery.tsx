'use client'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import ImageViewer from '../UI/imageViewer'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const arr = ['Выпускной 2021', '8 марта', 'На занятии', 'Новый год']

const graduation = Array(8).fill(0).map((i, index) => (
    {
        src: `/gallery/${arr[0]} (${index + 1}).jpg`,
        text: arr[0]
    }
))

const march = Array(4).fill(0).map((i, index) => (
    {
        src: `/gallery/${arr[1]} (${index + 1}).jpg`,
        text: arr[1]
    }
))

const lesson = Array(8).fill(0).map((i, index) => (
    {
        src: `/gallery/${arr[2]} (${index + 1}).jpg`,
        text: arr[2]
    }
))

const newYear = Array(9).fill(0).map((i, index) => (
    {
        src: `/gallery/${arr[3]} (${index + 1}).jpg`,
        text: arr[3]
    }
))

const Gallery = () => {
    const [current, setCurrent] = useState(0)
    const [open, setOpen] = useState(false)
    const [target, setTarget] = useState('all')

    let images: { src: string, text: string }[]
    switch (target) {
        case 'all':
            images = [...graduation, ...march, ...lesson, ...newYear]
            break
        case 'graduation':
            images = graduation
            break
        case 'march':
            images = march
            break
        case 'lesson':
            images = lesson
            break
        case 'newYear':
            images = newYear
            break
        default:
            images = [...graduation, ...march, ...lesson, ...newYear]
            break;
    }

    return (
        <>
            <ToggleButtonGroup
                value={target}
                exclusive
                onChange={(e, newTarget) => setTarget(newTarget)}
                aria-label="text alignment"
                className='mx-auto max-w-[95vw] overflow-scroll'
            >
                <ToggleButton value='all'> 
                    Все фото
                </ToggleButton>
                <ToggleButton value='graduation'>
                    Выпускной
                </ToggleButton>
                <ToggleButton value='march'>
                    8 марта
                </ToggleButton>
                <ToggleButton value='lesson'>
                    На занятии
                </ToggleButton>
                <ToggleButton value='newYear'>
                    Новый год
                </ToggleButton>
            </ToggleButtonGroup>
            <Grid
                container
                maxWidth='lg'
                sx={{ mx: 'auto' }}
            >
                <ImageViewer
                    images={images.map(image => image.src)}
                    current={current}
                    open={open}
                    setOpen={setOpen}
                />
                {images.map((img, index) =>
                    <Grid key={index} item xs={6} md={4} lg={3} sx={{ p: 1 }}>
                        <Box className='relative rounded-lg overflow-hidden cursor-pointer'>
                            <Box
                                className='transition-opacity absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 bg-[#515151] opacity-0 bg-opacity-80 hover:opacity-100'
                                onClick={() => {
                                    setOpen(true)
                                    setCurrent(index)
                                }}
                            >
                                <Typography variant='h5' fontWeight='bold' color='white'>
                                    {img.text}
                                </Typography>
                            </Box>
                            <Image
                                src={img.src}
                                alt={img.text}
                                width={400}
                                height={400}
                                className='w-full h-full -z-10 aspect-square object-cover'
                            />
                        </Box>
                    </Grid>
                )}
            </Grid>
        </>
    )
}

export default Gallery