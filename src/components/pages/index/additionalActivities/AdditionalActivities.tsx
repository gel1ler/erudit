import Title from '@/components/UI/text/Title'
import { additionalActivities } from '@/content/content'
import { Box, Typography } from '@mui/material'
import React from 'react'
import ActivityCard from './ActivityCard'

const AdditionalActivities = () => {
    return (
        <Box id='additioanl_anchor' className='-mt-[100px] pt-[100px] flex flex-col items-center'>
            <Title>Дополнительно</Title>
            <Box
                data-aos='fade-up'
                className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 p-4 rounded-lg max-w-2xl lg:max-w-7xl mx-auto mt-10"
            >
                {additionalActivities.map((activity, index) => (
                    <ActivityCard key={index} href={activity.href} title={activity.title} description={activity.description} />
                ))}
            </Box>
        </Box>
    )
}

export default AdditionalActivities