'use client'
import React, { useEffect, useState } from 'react'
import { AppBar } from '@mui/material'
import Bar from '../Bar'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { headerProps } from '@/customization/customization'

const scrollHeight: number | undefined = headerProps.scrollHeight

const ScrolledHeader = () => {
    const [height, setHeight] = useState<number>(0)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => setHeight(window.innerHeight), [])

    useScrollPosition(({ prevPos, currPos }) => {
        if (typeof scrollHeight === 'number') {
            let y: number = -currPos.y
            if (y >= height * scrollHeight) {
                setIsActive(true)
            }
            if (y < height * scrollHeight) {
                setIsActive(false)
            }
        }
    })

    return (
            <AppBar className='p-2' position={isActive ? 'fixed' : 'static'}>
                <Bar />
            </AppBar>
    )
}

export default ScrolledHeader