import Title from '@/components/UI/text/Title'
import { additionalActivities } from '@/content/content'
import { Box, Typography } from '@mui/material'
import React from 'react'
import ActivityCard from './ActivityCard'

const AdditionalActivities = () => {
    return (
        <Box id='additioanl_anchor' className='-mt-[100px] pt-[100px] flex flex-col items-center'>
            <Title>Дополнительно</Title>
            <Typography data-aos='fade-up' textAlign='center' mt={1} color='gray'>
                Нажмите на карточку для перехода на страницу
            </Typography>
            <Box data-aos='fade-up' className="flex flex-col p-4 rounded-lg mx-auto mt-6 md:mt-14">
                {additionalActivities.map((activity, index) => (
                    <ActivityCard key={index} activity={activity} last={index === additionalActivities.length - 1} />
                ))}
            </Box>
        </Box>
    )
}

export default AdditionalActivities