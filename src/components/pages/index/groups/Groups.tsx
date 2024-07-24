import { Box, Typography } from '@mui/material'
import React from 'react'
import { EndWave, StartWave } from '../../../../../public/bg/waves'
import Title from '@/components/UI/text/Title'
import Carousel from './Carousel'
import { groupsData } from '@/content/content'

const Groups = () => {
    return (
        <Box id='groups_anchor' className='relative overflow-hidden'>
            <StartWave />
            <Box className='bg-[#C0C7DD] pt-10 w-screen'>
                <Title sx={{ mt: -10 }} >Группы</Title>
                <Typography data-aos='fade-up' variant='body2' color='GrayText' textAlign='center' sx={{ my: 1 }}>
                    Листайте свайпами или нажимайте на стрелки
                </Typography>
                <Carousel cards={groupsData} />
            </Box>
            <EndWave />
        </Box>
    )
}

export default Groups