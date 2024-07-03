'use client'
import { Box } from '@mui/material'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import Plx from 'react-plx'



const opData = [{
    start: '250vh',
    end: '600vh',
    properties: [
        {
            startValue: 0,
            endValue: -600,
            property: "translateY",
        }
    ]
}]

const Bg2 = ({ children }: { children: ReactNode }) => {
    return (
        <Plx className='absolute h-[300vh] w-screen -z-50' parallaxData={opData}>
            <Box className='-z-50 pointer-events-none top-0 left-0 w-screen h-[300vh] blur-sm relative opacity-60'>
                {children}
            </Box>
        </Plx >
    )
}

export default Bg2