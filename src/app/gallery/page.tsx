import type { Metadata } from 'next'
import { Box } from '@mui/material'
import Loader from '../../components/layout/loader'
import Gallery from '@/components/pages/Gallery'
import Title from '@/components/UI/text/Title'
import Contacts from '@/components/pages/Contacts/Contacts'

export const metadata: Metadata = {
    title: 'Маленький Эрудит - Галерея',
    description: 'Посмотрите наши фотографии из занятий и мероприятий в детском центре "Маленький Эрудит". Мы создаем уютную и творческую атмосферу для каждого ребенка.',
}

export default function Home() {
    return (
        <>
            <Loader />
            <Box className='relative flex flex-col gap-4 my-40'>
                <Title h1>Галерея</Title>
                <Gallery />
            </Box>
            <Contacts noAos pageTitle='Галерея' />
        </>
    )
}
