import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { Ball, Circle, Dots, Planes, Planet } from './elements'
import Image from 'next/image'
import { Snowflake } from '../../../../../../public/start/snowflakes'

const StartBg = () => {
    const theme = useTheme()
    const isLg = useMediaQuery(theme.breakpoints.up('lg'))
    const isMd = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <Box position='absolute' className='w-screen h-screen' sx={{ zIndex: -1 }}>
            <Ball isLg={isLg} />
            <Circle isLg={isLg} />
            <Snowflake num={1} lg className='absolute right-[10vw] bottom-[10vh] rotate-12 hidden lg:block' />
            {isLg ?
                <>
                    <Dots bottom={isLg ? '40px' : '175px'} right={isLg ? '20%' : '-15%'} />
                    <Dots bottom={isLg ? '50%' : '80%'} left={isLg ? '' : '-10%'} vertical />
                </> : null}
            <Image
                src={isMd ? '/start/girl.jpg' : '/start/girl-vert.jpg'}
                fill
                alt='Background'
                className={`object-cover -z-50 ${isMd ? '' : 'opacity-30'}`}
                sizes="1920w 1080h"
            />
            {isMd ?
                <Box
                    className='-z-10 absolute left-0 top-0 w-screen h-screen'
                    sx={{
                        background: `
            linear-gradient(90deg, white 30%, transparent 100%),
            linear-gradient(0deg, white, transparent 10%)
        `
                    }}
                />
                : null}
            {/* {isLg ? <Planes /> : null} */}
        </Box>
    )
}

export default StartBg