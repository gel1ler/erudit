'use client'
import React, { useEffect, useState } from 'react'
import { AppBar, useMediaQuery, useTheme } from '@mui/material'
import Bar from '../Bar/Bar'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { headerProps } from '@/customization/customization'
import MyDrawer from '../drawer/MyDrawer'

const scrollHeight: number | undefined = headerProps.scrollHeight

const ScrolledHeader = () => {
    const [height, setHeight] = useState<number>(0)
    const [isActive, setIsActive] = useState(true)
    const [isOnTop, setIsOnTop] = useState(true)

    const theme = useTheme()
    const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'))

    useEffect(() => setHeight(window.innerHeight), [])


    useScrollPosition(({ prevPos, currPos }) => {
        if (typeof scrollHeight === 'number') {
            let y: number = -currPos.y
            if (y >= height * scrollHeight) {
                setIsActive(false)
                setIsOnTop(false)
            }
            if (y < height * scrollHeight) {
                setIsActive(true)
                setIsOnTop(true)
            }
        }
    })

    return (
        <>
            <AppBar
                position='fixed'
                onMouseEnter={() => isLgScreen && !isOnTop && setIsActive(true)}
                onMouseLeave={() => isLgScreen && !isOnTop && setIsActive(false)}
                sx={{
                    transition: 'all .3s cubic-bezier(0.4, 0, 0.2, 1)',
                    top: 20,
                    height: isActive ? '5rem' : 35,
                    width: isActive ? ['90%', '90%', '66%'] : 80,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: 100,
                    mx: 'auto',
                    left: 0,
                    right: 0,
                }}
            >
                <Bar isActive={isActive} />
                <MyDrawer isActive={isActive} />
            </AppBar>
        </>
    )
}

export default ScrolledHeader