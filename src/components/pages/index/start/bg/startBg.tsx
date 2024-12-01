import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { Ball, Circle, Dots, Planes, Planet } from './elements'
import Image from 'next/image'
import { Snowflake } from '../../../../../../public/start/snowflakes'

const StartBg = () => {
    const theme = useTheme()
    const isLg = useMediaQuery(theme.breakpoints.up('lg'))

    return (
        <Box position='absolute' className='w-screen h-screen -z-10'>
            <Ball isLg={isLg} />
            <Circle isLg={isLg} />
            <Snowflake num={4} lg className='absolute right-[10vw] bottom-[10vh] rotate-12 hidden lg:block' />
            <Dots bottom={isLg ? '40px' : '175px'} right={isLg ? '20%' : '-15%'} />
            <Dots bottom={isLg ? '50%' : '80%'} left={isLg ? '' : '-10%'} vertical />
            {/* {isLg ? <Planes /> : null} */}
        </Box>
    )
}

export default StartBg
