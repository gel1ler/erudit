import { Box } from '@mui/material'
import React from 'react'
import { Circle, Dots, Planes, Planet, Stars } from './elements'

const StartBg = () => {
    return (
        <Box position='absolute' className='w-screen h-screen'>
            <Planet />
            <Circle />
            <Dots bottom='40px' right='20%' />
            <Dots top='40px' right='10%' />
            <Dots bottom='40px' right='20%' />
            <Dots bottom='50%' vertical />
            <Stars bottom='25%' right='24%' />
            <Stars top='25%' left='22%' reversed />
            <Planes />
        </Box>
    )
}

export default StartBg