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
    const [foders, setFolders] = useState<string[]>([])
    const [folderPhotos, setFolderPhotos] = useState<{ folder: string; photos: string[] }[]>([])

    useEffect(() => {
        fetch('/api/getFolders')
            .then(response => response.json())
            .then(data => {
                setFolders(data.folders)
                setFolderPhotos(data.folderPhotos)
            })
    }, [])

    const currentPhotos = target === 'all' ? folderPhotos : [folderPhotos.find(folder => folder.folder === target)]

    let l = 0

    return (
        <>
            <ToggleButtonGroup
                value={target}
                exclusive
                onChange={(e, newTarget) => newTarget !== null && setTarget(newTarget)}
                aria-label="text alignment"
                className='mx-auto max-w-[95vw] overflow-auto px-[2px]'
            >
                <ToggleButton sx={{ fontSize: [12, 13, 14] }} value='all'>
                    Все фото
                </ToggleButton>
                {foders.map((folder, index) =>
                    <ToggleButton sx={{ fontSize: [12, 13, 14] }} key={index} value={folder}>
                        {folder}
                    </ToggleButton>
                )}
            </ToggleButtonGroup>
            <Grid
                container
                maxWidth='lg'
                sx={{ mx: 'auto' }}
            >
                <ImageViewer
                    images={currentPhotos.flatMap(folder => folder!.photos)}
                    current={current}
                    open={open}
                    setOpen={setOpen}
                />
                {currentPhotos.map(folder => {
                    if (folder)
                        return folder.photos.map(photo => {
                            let index = l
                            l++
                            return (
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
                                                {folder.folder}
                                            </Typography>
                                        </Box>
                                        <Image
                                            src={photo}
                                            alt={folder.folder}
                                            width={400}
                                            height={400}
                                            className='w-full h-full -z-10 aspect-square object-cover'
                                        />
                                    </Box>
                                </Grid>
                            )
                        })
                })}
            </Grid>
        </>
    )
}

export default Gallery