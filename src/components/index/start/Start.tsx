'use client'
import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import Plx from 'react-plx'
import { InstagramIcon, PhoneCall, TelegramIcon, VkIcon } from '../../icons/socialMediaIcons'
import StartBg from './bg/startBg'

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
                className='h-screen relative flex justify-center items-center'
            >
                <StartBg />
                <Image
                    src='/1.png'
                    fill
                    alt='Background'
                    className='object-cover -z-50'
                />
                <Box className='flex flex-col items-center w-1/2 gap-4'>
                    <Typography color='text.secondary' variant='h3' textAlign='center'>
                        Детский центр &quot;Маленький эрудит&quot; объявляет набор на 2024-2025 учебный год
                    </Typography>
                    <Box className='flex justify-between'>
                        <PhoneCall icon />
                        <VkIcon />
                        <TelegramIcon />
                        <InstagramIcon />
                    </Box>
                    <Button
                        variant='outlined'
                        className='w-fit'
                        sx={{
                            borderRadius: '50px',
                            py: '10px',
                            border: '3px solid #fff',
                            px: 4,
                            fontSize: '15px',
                            '&:hover': {
                                border: '3px solid #fff',
                                backgroundColor: '#fff',
                                color: 'text.primary',
                            }
                        }}
                    >
                        Записаться
                    </Button>
                </Box>
            </Box>
        </Plx >
    )
}

export default Start