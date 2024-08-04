'use client'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import Plx from 'react-plx'



const opData = [{
    start: 0,
    end: '200vh',
    properties: [
        {
            startValue: 0,
            endValue: -400,
            property: "translateY",
        }
    ]
}]

const BgNoOp = ({ children }: { children: ReactNode }) => {
    const theme = useTheme()
    const isLg = useMediaQuery(theme.breakpoints.up('lg'))

    if (!isLg) return null

    return (
        <Plx className='absolute h-[150vh]' parallaxData={opData}>
            <Box className='-z-50 pointer-events-none top-0 left-0 w-screen overflow-hidden h-[150vh] blur-sm absolute opacity-60'>
                {children}
            </Box>
        </Plx >
    )
}

export default BgNoOp