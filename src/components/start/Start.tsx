import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { mainInfo } from '@/content/content'

const Start = () => {
    return (
        <Box className='w-full flex-grow grid grid-cols-2 p-10'>
            <Box className='h-full flex flex-col gap-6 items-center'>
                <Box className='relative w-full h-1/2 max-h-96'>
                    <Image
                        src={mainInfo.logoVertical}
                        fill
                        alt='Logo'
                    />
                </Box>
                <Typography variant='h5' textAlign='center' className='w-2/3'>
                    {mainInfo.description}
                </Typography>
            </Box>
        </Box>
    )
}

export default Start