'use client'
import React from 'react'
import { Box, Button, styled, Tooltip, tooltipClasses, TooltipProps, Typography } from '@mui/material'
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

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

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
                <HtmlTooltip
                    title={
                        <React.Fragment>
                            <Typography color="inherit">
                                Хорошее место
                            </Typography>
                            <Typography color="GrayText" variant='body2'>
                                Любимые организации по оценкам и отзывам пользователей Яндекса
                            </Typography>
                        </React.Fragment>
                    }
                >
                    <div style={{ position: 'absolute' }} className="top-4 right-10 business-awards-view__badge _yandex"><span className="inline-image _loaded icon business-awards-view__bg-yandex" aria-hidden="true" role="button" tabIndex={-1} style={{ fontSize: 0, lineHeight: 0 }}><svg width="56" height="72" viewBox="0 0 56 72" xmlns="http://www.w3.org/2000/svg"><path d="M0 27.913C0 12.497 12.536 0 28 0s28 12.497 28 27.913v38.748c0 3.834-3.936 6.415-7.467 4.897l-19.741-8.483a2.005 2.005 0 0 0-1.584 0l-19.74 8.483C3.935 73.076 0 70.495 0 66.661V27.913z" fill="currentColor"></path></svg></span><span className="inline-image _loaded icon business-awards-view__badge-icon" aria-hidden="true" role="button" tabIndex={-1} style={{ fontSize: 0, lineHeight: 0 }}><svg width="40" height="24" viewBox="0 0 40 24" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="12" r="12" fill="#FC3F1D"></circle><path d="M21.885 19.5h2.616v-15h-3.808c-3.83 0-5.839 1.96-5.839 4.857 0 2.5 1.303 3.91 3.61 5.44l1.401.925-1.799-1.508-3.565 5.286h2.837l3.808-5.683-1.325-.88c-1.6-1.08-2.384-1.917-2.384-3.734 0-1.597 1.126-2.677 3.267-2.677h1.17V19.5h.011z" fill="#fff"></path></svg></span><div className="business-awards-view__badge-year">2023</div></div>
                </HtmlTooltip>
            </Box>
        </Plx >
    )
}

export default Start