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
                    <Box className='relative h-screen w-full flex flex-col items-center justify-around gap-4'>
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
                        <Link href='/' className='w-1/2 max-w-xs min-w-60 mx-auto'>
                            <Image
                                alt='Logo'
                                src='/logo/logo-horizontal.svg'
                                width={163}
                                height={56}
                                className='w-full max-w-xs'
                                />
                        </Link>
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