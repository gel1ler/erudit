'use client'
import React from 'react'
import { Box, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { SnackbarProvider, useSnackbar } from 'notistack'

const StyledSnackbarProvider = styled(SnackbarProvider)(`
&.SnackbarItem-contentRoot {
  background-color: #eeeeee;
  font-size: 25px;
  color: black
}
`)

const PhoneLink = () => {
    const { enqueueSnackbar } = useSnackbar()
    const copyLink = (text: string, msg: string) => {
        navigator.clipboard.writeText(text)
        enqueueSnackbar(msg)
    }

    const phoneClick = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            window.location.href = 'tel:84951111111'
        }
        else {
            copyLink('+7(495)111-11-11', 'Номер телефона скопирован')
        }
    }

    return (
        <Typography onClick={phoneClick}>
            чсапв
        </Typography>
    )
}

const TopHeader = () => {
    return (
        <StyledSnackbarProvider maxSnack={4} autoHideDuration={3000}>
            <Box sx={{
                p: '5px',
                display: 'grid',
                gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)'],
                justifyItems: 'center',
                width: '100vw',
                transition: 'all 0.2s ease-out',
                zIndex: 999,
                bgcolor: 'additional.main'
            }}>
                <PhoneLink />
                <PhoneLink />
                <PhoneLink />
            </Box>
        </StyledSnackbarProvider>
    )
}

export default TopHeader
