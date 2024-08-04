'use client'
import React, { ReactNode } from 'react'
import Plx from 'react-plx'

const startParallax = [
    {
        start: 0,
        end: '50vh',
        properties: [
            {
                startValue: 1,
                endValue: 0,
                property: "opacity",
            }
        ]
    },
    {
        start: 0,
        end: '100vh',
        properties: [
            {
                startValue: 0,
                endValue: -400,
                property: "translateY",
            },
        ]
    }
]
const ParallaxWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <Plx parallaxData={startParallax}>
            {children}
        </Plx >
    )
}

export default ParallaxWrapper