import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { mainInfo } from '@/content/content'
import Fill from './bg/Fill'
import { headerProps } from '@/customization/customization'

const Start = () => {
    return (
        <Box
            className='flex flex-col'
            sx={{
                height: headerProps.type === 'scrolled' ? '100vh' : 'calc(100vh - 7rem)'
            }}
        >
            <Box className='w-full flex-grow grid grid-cols-2 p-10 relative'>
                <Image
                    src='/general.jpg'
                    fill
                    alt='Background'
                    className='object-cover -z-50'
                />
                <Fill />
                <Box className='h-full flex flex-col gap-6 items-center justify-center'>
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
        </Box>
    )
}

export default Start