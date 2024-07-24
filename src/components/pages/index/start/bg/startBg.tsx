import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { Circle, Dots, Planes, Planet, Stars } from './elements'

const StartBg = () => {
    const theme = useTheme()
    const isLg = useMediaQuery(theme.breakpoints.up('lg'))

    return (
        <Box position='absolute' className='w-screen h-screen -z-10'>
            <Planet isLg={isLg} />
            <Circle isLg={isLg} />
            <Dots bottom='40px' right={isLg ? '20%' : '-10%'} />
            <Dots bottom={isLg ? '50%' : '70%'} vertical />
            {isLg ? <Planes /> : null}
        </Box>
    )
}

export default StartBg