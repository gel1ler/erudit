'use client'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import Plx from 'react-plx'



const opData = [{
    start: 0,
    end: '100vh',
    properties: [
        {
            startValue: 0,
            endValue: 1,
            property: "opacity",
        },
        {
            startValue: 0,
            endValue: -400,
            property: "translateY",
        }
    ]
},
{
    start: 'self',
    end: '#groups_anchor',
    properties: [
        {
            startValue: 0,
            endValue: -400,
            property: "translateY",
        }
    ]
}]

const Bg = ({ children }: { children: ReactNode }) => {
    const theme = useTheme()
    const isLg = useMediaQuery(theme.breakpoints.up('lg'))

    if (!isLg) return null

    return (
        <Plx className='absolute h-[90vh]' parallaxData={opData}>
            <Box className='-z-50 pointer-events-none top-0 left-0 w-screen overflow-hidden h-[90vh] blur-sm absolute opacity-60'>
                {children}
            </Box>
        </Plx >
    )
}

export default Bg