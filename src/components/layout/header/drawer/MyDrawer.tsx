'use client'
import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { Drawer, Box, useMediaQuery } from '@mui/material'
import { Close } from '@mui/icons-material'
import IB from '@/components/icons/IB'
import MenuIcon from '@mui/icons-material/Menu'
import NavLinks, { DrawerNavLinks } from '../Bar/NavLinks'


const MyDrawer = ({ isActive, noAbs }: { isActive?: boolean, noAbs?: boolean }) => {
    const [open, setOpen] = useState(false)

    if (noAbs && true) return null
    return (
        <>
            <IB
                f={() => setOpen(true)}
                sx={{
                    opacity: isActive ? 0 : 1,
                    transition: 'opacity .15s ease-out',
                    position: noAbs ? 'static' : 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: noAbs ? null : 'translate(-50%, -50%)',
                    pointerEvents: isActive ? 'none' : 'auto',
                }}
            >
                <MenuIcon />
            </IB>
            <Drawer open={open} onClose={() => setOpen(false)} anchor='top'>
                <Box
                    className='h-[100dvh] w-screen'
                >
                    <Box className='relative h-screen flex flex-col items-center justify-center gap-4'>
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
                        <DrawerNavLinks setOpen={setOpen} hoverType='color' />
                    </Box>
                </Box>
            </Drawer >
        </>
    )
}

export default MyDrawer