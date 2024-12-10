import { Box, Typography } from '@mui/material'
import React from 'react'
import Title from '@/components/UI/text/Title'
import Carousel from './Carousel'
import { groupsData } from '@/content/content'

const Groups = () => {
    return (
        <Box id='groups_anchor' className='relative overflow-hidden text-[#303030]'>
            <Box
                className='pt-10 pb-20 w-screen bg-slate-100'
                sx={{
                    background: 'url(/bg/items.png), linear-gradient(to right, rgba(225,123,226,1), rgba(101,229,255,1))',
                    boxShadow: '0 0 10px 3px rgba(0, 0, 0, 0.2) inset'
                  }}
            >
                <Title>Подготовка к школе</Title>
                <Typography data-aos='fade-up' variant='body2' textAlign='center' sx={{ my: 1 }}>
                    Листайте свайпами или нажимайте на стрелки
                </Typography>
                <Carousel cards={groupsData} />
            </Box>
        </Box>
    )
}

export default Groups