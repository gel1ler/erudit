import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const arr = [
    {
        src: '/gallery/1.png',
        text: 'Выпускной 2021'
    },
    {
        src: '/gallery/2.png',
        text: 'Выпускной 2021'
    },
    {
        src: '/gallery/3.png',
        text: 'Выпускной 2021'
    },
    {
        src: '/gallery/4.png',
        text: 'Выпускной 2021'
    },
    {
        src: '/gallery/5.png',
        text: 'Выпускной 2021'
    },
]

const Gallery = () => {
    return (
        <Grid
            container
            spacing={2}
            maxWidth='lg'
            sx={{ mx: 'auto' }}
        >
            <Grid item xs={4} className='aspect-square flex items-center justify-center gap-2' sx={{ flexDirection: 'column' }}>
                <Typography variant='h2' fontWeight='bold'>
                    Галерея
                </Typography>
                <Typography variant='h6'>
                    Полная версия
                    {'->'}
                </Typography>
            </Grid>
            {arr.map((img, index) =>
                <Grid key={index} item xs={4}>
                    <Box className='relative rounded-lg overflow-hidden cursor-pointer'>
                        <Box
                            className='transition-opacity absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 bg-[#515151] opacity-0 bg-opacity-80 hover:opacity-100'
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
                            className=' w-full h-full -z-10'
                        />
                    </Box>
                </Grid>
            )}
        </Grid>
    )
}

export default Gallery