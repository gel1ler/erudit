'use client'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ImageViewer from '../../UI/imageViewer'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link'

const Gallery = () => {
    const [current, setCurrent] = useState(0)
    const [open, setOpen] = useState(false)
    const [photos, setPhotos] = useState<{ url: string; key: string }[]>([])

    useEffect(() => {
        fetch('/api/getPhotos?folder=Главная страница')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    setPhotos(data.slice(1))
                } else {
                    setPhotos([])
                }
            })
    }, [])

    return (
        <Grid
            container
            maxWidth='lg'
            sx={{ mx: 'auto', p: 2, mt: 10 }}
            id='gallery_anchor'
            className='anchor'
        >
            <ImageViewer
                images={photos.map(image => image.url)}
                current={current}
                open={open}
                setOpen={setOpen}
            />
            <Grid item xs={6} md={4} className='flex items-center justify-center'>
                <Link
                    href='/gallery'
                    className='flex items-center justify-center gap-2 flex-col cursor-pointer hover:translate-x-2 duration-150'
                >
                    <Typography variant='h2' fontWeight='bold'>
                        Галерея
                    </Typography>
                    <Typography variant='h6' className='duration-150' id='full-gallery'>
                        Полная версия
                        <ArrowRightAltIcon />
                    </Typography>
                </Link>
            </Grid>
            {photos.map((img, index) =>
                <Grid key={index} item xs={6} md={4} sx={{ p: 1 }}>
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
    )
}

export default Gallery