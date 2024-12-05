'use client'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { AppBar, SxProps, useMediaQuery, useTheme } from '@mui/material'
import Bar from './Bar/Bar'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { headerProps } from '@/customization/customization'
import MyDrawer from './MyDrawer'

const scrollHeight: number | undefined = headerProps.scrollHeight

interface ScrollPosition {
    x: number;
    y: number;
}

const Header = () => {
    const [height, setHeight] = useState<number>(0)
    const [isActive, setIsActive] = useState(true)
    const [isOnTop, setIsOnTop] = useState(true)

    const theme = useTheme()
    const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'))


    useEffect(() => setHeight(window.innerHeight), [])

    const handleScroll = useCallback(({ currPos }: { currPos: ScrollPosition }) => {
        if (typeof scrollHeight === 'number') {
            const y = -currPos.y
            const threshold = height * scrollHeight
            setIsActive(y < threshold)
            setIsOnTop(y < threshold)
        }
    }, [height, scrollHeight])

    useScrollPosition(handleScroll)

    const appBarStyles: SxProps = useMemo(() => ({
        transition: 'all .3s cubic-bezier(0.4, 0, 0.2, 1)',
        top: 20,
        height: '5rem',
        width: ['90%', '90%', '66%'],
        minWidth: ['auto', 'auto', '1000px'],
        maxWidth: '99vw',
        boxShadow: 'none',
        backgroundColor: isActive ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        clipPath: isActive ?
            'polygon(-10% -10%, 110% -10%, 110% 1000%, -10% 1000%)' :
            'polygon(40% 0%, 60% 0%, 60% 100%, 40% 100%)',
        borderRadius: 100,
        mx: 'auto',
        left: 0,
        right: 0,
        '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 100,
            boxShadow: '0 0 5px 3px rgba(0,0,0,0.2)',
            opacity: isActive ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            pointerEvents: 'none',
        }
    }), [isActive])

    return (
        <>
            <AppBar
                position='fixed'
                onMouseEnter={() => isLgScreen && !isOnTop && setIsActive(true)}
                onMouseLeave={() => isLgScreen && !isOnTop && setIsActive(false)}
                sx={appBarStyles}
            >
                <Bar isActive={isActive} />
                <MyDrawer isActive={isActive} />
            </AppBar >
        </>
    )
}

export default Header