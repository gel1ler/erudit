'use client'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ImageViewer from '../UI/imageViewer'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Gallery = () => {
    const [current, setCurrent] = useState(0)
    const [open, setOpen] = useState(false)
    const [target, setTarget] = useState('all')

    const [photos, setPhotos] = useState<{ url: string; key: string }[]>([])

    useEffect(() => {
        fetch('/api/getPhotos')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    setPhotos(data.slice(1))
                } else {
                    setPhotos([])
                }
            })
    }, [])

    let images: { src: string, text: string }[]

    return (
        <>
            <ToggleButtonGroup
                value={target}
                exclusive
                onChange={(e, newTarget) => setTarget(newTarget)}
                aria-label="text alignment"
                className='mx-auto max-w-[95vw] overflow-auto px-[1px]'
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
                    images={photos.map(image => image.url) }
                    current={current}
                    open={open}
                    setOpen={setOpen}
                />
                {photos.map((img, index) =>
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
                                    {img.key.split('/')[1].split('(')[0]}
                                </Typography>
                            </Box>
                            <Image
                                src={img.url}
                                alt={img.key}
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