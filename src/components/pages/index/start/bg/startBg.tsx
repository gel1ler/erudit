import { Box } from '@mui/material'
import React from 'react'
import { Circle, Dots, Planes, Planet, Stars } from './elements'

const StartBg = () => {
    return (
        <Box position='absolute' className='w-screen h-screen -z-10'>
            <Planet />
            <Circle />
            <Dots bottom='40px' right='20%' />
            <Dots bottom='40px' right='20%' />
            <Dots bottom='50%' vertical />
            <Planes />
        </Box>
    )
}

export default StartBg