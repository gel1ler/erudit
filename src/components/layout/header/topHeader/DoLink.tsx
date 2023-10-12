'use client'
import React from 'react'
import { Typography, } from '@mui/material'
import { useSnackbar } from 'notistack'
import { mainInfo } from '@/content/content'

const phone = mainInfo.phone

export default function DoLink() {
    const { enqueueSnackbar } = useSnackbar()
    const copyLink = (text: string, msg: string) => {
        navigator.clipboard.writeText(text)
        enqueueSnackbar(msg)
    }

    const phoneClick = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            window.location.href = 'tel:' + phone
        }
        else {
            copyLink(phone, 'Номер телефона скопирован')
        }
    }

    return (
        <Typography onClick={phoneClick} fontWeight='fontWeightBold'>
            {phone}
        </Typography>
    )
}
