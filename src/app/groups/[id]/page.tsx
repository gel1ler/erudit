import Loader from '@/components/layout/loader'
import Contacts from '@/components/pages/Contacts'
import { EnrollButton } from '@/components/UI/form/Buttons'
import Title from '@/components/UI/text/Title'
import { groupsData } from '@/content/content'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Group = ({ params }: { params: { id: number } }) => {
    const group = groupsData[params.id]
    return (
        <>
            <Loader />
            <Box className='relative flex flex-col gap-4 min-h-screen px-4 items-center justify-center'>
                <Image
                    src={group.img}
                    fill
                    alt='фото группы'
                    className='object-cover h-screen w-screen brightness-50 -z-10 flex flex-col'
                />
                <Title white>{group.title}</Title>
                <Typography className=' max-w-screen-md' textAlign='center' variant='h6' color='white'>
                    {group.text}
                </Typography>
                <EnrollButton />
            </Box>
            <Contacts noAos />
        </>
    )
}

export default Group