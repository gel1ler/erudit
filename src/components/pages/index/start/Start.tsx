'use client'
import React from 'react'
import { useMediaQuery, useTheme } from '@mui/material'
import ParallaxWrapper from './ParallaxWrapper'
import StartContent from './StartContent'


const Start = () => {
    const theme = useTheme()
    const isLg = useMediaQuery(theme.breakpoints.up('lg'))

    if (isLg)
        return (
            <ParallaxWrapper>
                <StartContent isLg={isLg} />
            </ParallaxWrapper>
        )

    return <StartContent />
}

export default Start