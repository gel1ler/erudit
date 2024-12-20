import type { Metadata } from 'next'
import { Box } from '@mui/material'
import Loader from '../../components/layout/loader'
import Contacts from '@/components/pages/Contacts/Contacts'
import News from '@/components/pages/news/News'

export const metadata: Metadata = {
    title: 'Маленький Эрудит - Новости',
    description: 'Последние новости из детского центра "Маленький Эрудит". Мы создаем уютную и творческую атмосферу для каждого ребенка.',
}

export default function Home() {
    return (
        <>
            <Loader />
            <Box className='relative flex flex-col gap-4 my-40'>
                <News />
            </Box>
            <Contacts noAos pageTitle='Новости' />
        </>
    )
}
