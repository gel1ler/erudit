'use client'
import React from 'react'
import { Box, styled, Tooltip, tooltipClasses, TooltipProps, Typography } from '@mui/material'
import Image from 'next/image'
import { InstagramIcon, PhoneCall, TelegramIcon, VkIcon } from '../../../icons/socialMediaIcons'
import StartBg from './bg/startBg'
import { EnrollButton } from '@/components/UI/form/Buttons'
import Carousel from './Carousel'

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

const StartContent = () => {
    return (
        <div
            className='h-screen relative flex justify-start overflow-hidden'
        >
            <StartBg />
            <div className='flex flex-col items-center md:items-start justify-center md:w-1/2 w-full px-4 md:px-0 gap-4 md:mx-[10vw]'>
                <Image src='/logo/logo-horizontal-2-base.svg' width={800} height={116} alt='Логотип' className='z-10' />
                <Typography variant='h3' className='text-center md:text-left'>
                    Объявлен набор на <br /> 2025-2026 учебный год
                </Typography>
                <div className="flex flex-col gap-4">
                    <div className='flex justify-between px-2'>
                        <PhoneCall dark icon />
                        <VkIcon dark />
                        <TelegramIcon dark />
                        <InstagramIcon dark />
                    </div>
                    <EnrollButton dark />
                </div>
            </div>

            <HtmlTooltip
                sx={{ display: ['none', 'none', 'flex'] }}
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
                <Box sx={{ position: 'absolute', display: ['none', 'none', 'flex'] }} className="top-4 right-20 business-awards-view__badge _yandex"><span className="inline-image _loaded icon business-awards-view__bg-yandex" aria-hidden="true" role="button" tabIndex={-1} style={{ fontSize: 0, lineHeight: 0 }}><svg width="56" height="72" viewBox="0 0 56 72" xmlns="http://www.w3.org/2000/svg"><path d="M0 27.913C0 12.497 12.536 0 28 0s28 12.497 28 27.913v38.748c0 3.834-3.936 6.415-7.467 4.897l-19.741-8.483a2.005 2.005 0 0 0-1.584 0l-19.74 8.483C3.935 73.076 0 70.495 0 66.661V27.913z" fill="currentColor"></path></svg></span><span className="inline-image _loaded icon business-awards-view__badge-icon" aria-hidden="true" role="button" tabIndex={-1} style={{ fontSize: 0, lineHeight: 0 }}><svg width="40" height="24" viewBox="0 0 40 24" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="12" r="12" fill="#FC3F1D"></circle><path d="M21.885 19.5h2.616v-15h-3.808c-3.83 0-5.839 1.96-5.839 4.857 0 2.5 1.303 3.91 3.61 5.44l1.401.925-1.799-1.508-3.565 5.286h2.837l3.808-5.683-1.325-.88c-1.6-1.08-2.384-1.917-2.384-3.734 0-1.597 1.126-2.677 3.267-2.677h1.17V19.5h.011z" fill="#fff"></path></svg></span><div className="business-awards-view__badge-year">2023</div></Box>
            </HtmlTooltip>
            <HtmlTooltip
                sx={{ display: ['none', 'none', 'flex'] }}
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
                <Box sx={{ position: 'absolute', display: ['none', 'none', 'flex'] }} className="top-4 right-10 business-awards-view__badge _yandex"><span className="inline-image _loaded icon business-awards-view__bg-yandex" aria-hidden="true" role="button" tabIndex={-1} style={{ fontSize: 0, lineHeight: 0 }}><svg width="56" height="72" viewBox="0 0 56 72" xmlns="http://www.w3.org/2000/svg"><path d="M0 27.913C0 12.497 12.536 0 28 0s28 12.497 28 27.913v38.748c0 3.834-3.936 6.415-7.467 4.897l-19.741-8.483a2.005 2.005 0 0 0-1.584 0l-19.74 8.483C3.935 73.076 0 70.495 0 66.661V27.913z" fill="currentColor"></path></svg></span><span className="inline-image _loaded icon business-awards-view__badge-icon" aria-hidden="true" role="button" tabIndex={-1} style={{ fontSize: 0, lineHeight: 0 }}><svg width="40" height="24" viewBox="0 0 40 24" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="12" r="12" fill="#FC3F1D"></circle><path d="M21.885 19.5h2.616v-15h-3.808c-3.83 0-5.839 1.96-5.839 4.857 0 2.5 1.303 3.91 3.61 5.44l1.401.925-1.799-1.508-3.565 5.286h2.837l3.808-5.683-1.325-.88c-1.6-1.08-2.384-1.917-2.384-3.734 0-1.597 1.126-2.677 3.267-2.677h1.17V19.5h.011z" fill="#fff"></path></svg></span><div className="business-awards-view__badge-year">2025</div></Box>
            </HtmlTooltip>
        </div>
    )
}

export default StartContent
