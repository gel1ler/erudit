import type { Metadata } from 'next'
import { Box } from '@mui/material'
import Loader from '../../components/layout/loader'
import Gallery from '@/components/pages/Gallery'
import Title from '@/components/UI/text/Title'
import Contacts from '@/components/pages/Contacts/Contacts'
import News from '@/components/pages/news/News'

export const metadata: Metadata = {
    title: 'Детский центр Маленький Эрудит',
    description: 'Детский центр "Маленький Эрудит" - это свой маленький мир для каждого ребенка, где его искренне любят, уважают и всегда ждут!',
}

export default function Home() {
    return (
        <>
            <Loader />
            <Box className='relative flex flex-col gap-4 my-40'>
                <News />
            </Box>
            <Contacts noAos />
        </>
    )
}
