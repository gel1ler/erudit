'use client'
import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { Drawer, Box, useMediaQuery } from '@mui/material'
import { Close } from '@mui/icons-material'
import IB from '@/components/icons/IB'
import MenuIcon from '@mui/icons-material/Menu'
import NavLinks, { DrawerNavLinks } from '../Bar/NavLinks'
import Link from 'next/link'
import Image from 'next/image'
import { ContactsButton } from '@/components/UI/form/Buttons'
import { InstagramIcon, PhoneCall, TelegramIcon, VkIcon } from '@/components/icons/socialMediaIcons'


const MyDrawer = ({ isActive, noAbs }: { isActive?: boolean, noAbs?: boolean }) => {
    const [open, setOpen] = useState(false)
    const theme = useTheme()
    const isLg = useMediaQuery(theme.breakpoints.up('lg'))

    if (noAbs && isLg) return null
    return (
        <>
            <IB
                f={() => setOpen(true)}
                sx={{
                    opacity: isActive ? !noAbs && 0 : 1,
                    transition: 'opacity .15s ease-out',
                    position: noAbs ? 'static' : 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: noAbs ? null : 'translate(-50%, -50%)',
                    pointerEvents: isActive && !noAbs ? 'none' : 'auto',
                }}
            >
                <MenuIcon
                    sx={{
                        fontSize: noAbs ? '30px' : 'inherit'
                    }}
                />
            </IB>
            <Drawer open={open} onClose={() => setOpen(false)} anchor='top'>
                <Box
                    className='h-[100dvh] w-screen'
                >
                    <Box className='relative h-[100svh] w-full flex flex-col items-center justify-center gap-16'>
                        <IB
                            f={() => setOpen(false)}
                            sx={{
                                position: 'absolute',
                                right: 20,
                                top: 20,
                            }}
                        >
                            <Close sx={{ fontSize: '35px' }} />
                        </IB>
                        <Box className='w-full flex flex-col items-center gap-2'>
                            <Link href='/' className='w-2/3 max-w-xs min-w-60 mx-auto'>
                                <Image
                                    alt='Logo'
                                    src='/logo/logo-horizontal.svg'
                                    width={163}
                                    height={56}
                                    className='w-full max-w-xs'
                                />
                            </Link>
                            <div aria-haspopup="true" aria-expanded="false" className="business-awards-view__award mx-auto px-10 w-fit" aria-hidden="false" role="button" tabIndex={0}><div className="business-awards-view__badge _yandex"><span className="inline-image _loaded icon business-awards-view__bg-yandex" aria-hidden="true" role="button" tabIndex={-1} style={{ fontSize: 0, lineHeight: 0 }}><svg width="56" height="72" viewBox="0 0 56 72" xmlns="http://www.w3.org/2000/svg"><path d="M0 27.913C0 12.497 12.536 0 28 0s28 12.497 28 27.913v38.748c0 3.834-3.936 6.415-7.467 4.897l-19.741-8.483a2.005 2.005 0 0 0-1.584 0l-19.74 8.483C3.935 73.076 0 70.495 0 66.661V27.913z" fill="currentColor"></path></svg></span><span className="inline-image _loaded icon business-awards-view__badge-icon" aria-hidden="true" role="button" tabIndex={-1} style={{ fontSize: 0, lineHeight: 0 }}><svg width="40" height="24" viewBox="0 0 40 24" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="12" r="12" fill="#FC3F1D"></circle><path d="M21.885 19.5h2.616v-15h-3.808c-3.83 0-5.839 1.96-5.839 4.857 0 2.5 1.303 3.91 3.61 5.44l1.401.925-1.799-1.508-3.565 5.286h2.837l3.808-5.683-1.325-.88c-1.6-1.08-2.384-1.917-2.384-3.734 0-1.597 1.126-2.677 3.267-2.677h1.17V19.5h.011z" fill="#fff"></path></svg></span><div className="business-awards-view__badge-year">2023</div></div><div className="business-awards-view__content"><div className="business-awards-view__title">Хорошее место</div><div className="business-awards-view__text">Любимые организации<br /> пользователей Яндекса</div></div></div>
                        </Box>
                        <Box className='flex flex-col gap-4 items-center justify-center'>
                            <DrawerNavLinks setOpen={setOpen} hoverType='color' />
                        </Box>
                        <Box className='flex flex-col gap-4 items-center justify-center'>
                            <ContactsButton onClick={() => setOpen(false)} drawer />
                            <Box className='flex justify-between'>
                                <PhoneCall icon dark />
                                <VkIcon dark />
                                <TelegramIcon dark />
                                <InstagramIcon dark />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Drawer >
        </>
    )
}

export default MyDrawer