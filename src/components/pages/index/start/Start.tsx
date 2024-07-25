'use client'
import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import Plx from 'react-plx'
import { InstagramIcon, PhoneCall, TelegramIcon, VkIcon } from '../../../icons/socialMediaIcons'
import StartBg from './bg/startBg'
import { EnrollButton } from '@/components/UI/form/Buttons'

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

const Start = () => {
    return (
        <Plx parallaxData={startParallax}>
            <Box
                className='h-screen relative flex justify-center overflow-hidden'
            >
                <StartBg />
                <Image
                    src='/1.png'
                    fill
                    alt='Background'
                    className='object-cover -z-50 brightness-75'
                />
                <Box className='flex flex-col items-center justify-center md:w-1/2 w-full px-2 gap-4'>
                    <Typography color='text.secondary' variant='h3' textAlign='center'>
                        Детский центр &quot;Маленький эрудит&quot; объявлет набор на 2024-2025 учебный год
                    </Typography>
                    <Box className='flex justify-between'>
                        <PhoneCall icon />
                        <VkIcon />
                        <TelegramIcon />
                        <InstagramIcon />
                    </Box>
                    <EnrollButton />
                </Box>
            </Box>
        </Plx >
    )
}

export default Start