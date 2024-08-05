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
            <Dots bottom={isLg ? '40px' : '175px'} right={isLg ? '20%' : '-15%'} />
            <Dots bottom={isLg ? '50%' : '80%'} left={isLg ? '' : '-10%'} vertical />
            {isLg ? <Planes /> : null}
        </Box>
    )
}

export default StartBg