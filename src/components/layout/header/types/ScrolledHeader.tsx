'use client'
import React, { useEffect, useState } from 'react'
import { AppBar, Typography } from '@mui/material'
import Bar from '../Bar/Bar'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { headerProps } from '@/customization/customization'
import MenuIcon from '@mui/icons-material/Menu';

const scrollHeight: number | undefined = headerProps.scrollHeight

const ScrolledHeader = () => {
    const [height, setHeight] = useState<number>(0)
    const [isActive, setIsActive] = useState(true)
    const [isOnTop, setIsOnTop] = useState(true)

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
                className=' overflow-hidden'
                onMouseEnter={() => isOnTop ? null : setIsActive(true)}
                onMouseLeave={() => isOnTop ? null : setIsActive(false)}
                sx={{
                    transition: 'all .3s cubic-bezier(0.4, 0, 0.2, 1)',
                    top: 20,
                    height: isActive ? '5rem' : 30,
                    width: isActive ? ['90%', '90%', '66%'] : 90,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: 100,
                    mx: 'auto',
                    left: 0,
                    right: 0,
                }}
            >
                <Bar isActive={isActive} />
                <MenuIcon
                    sx={{
                        opacity: isActive ? 0 : 1,
                        transition: 'opacity .15s ease-out',
                    }}
                    className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2'
                />
            </AppBar>
        </>
    )
}

export default ScrolledHeader