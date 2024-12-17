import type { Metadata } from 'next'
import PageLayout from '@/components/pages/pageLayout'
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Content from '@/components/pages/additional/languages/Content';

export const metadata: Metadata = {
    title: 'Эрудит Центр - Иностранные языки',
    description: 'Обучение иностранным языкам с акцентом на практическое использование и свободное общение',
}



export default function Home() {
    return (
        <PageLayout noContacts isECenter pageTitle='Иностранные языки'>
            <Box className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-2xl text-white flex flex-col items-center justify-center max-w-7xl mx-auto">
                <Typography variant="h2" className="text-4xl font-bold mb-4 text-center">🌍 Обучение иностранным языкам 🌍</Typography>
                <Box className='flex flex-col lg:flex-row gap-10 mt-5'>
                    <Typography variant="h6" className="text-lg mb-6 w-full lg:w-1/2 text-center lg:text-left">
                        <b>Индивидуальные занятия и группы, подготовка к ОГЭ и ЕГЭ.</b> <br />
                        Наши курсы иностранных языков разработаны для того, чтобы вы могли свободно общаться на новом языке. Мы предлагаем обучение с акцентом на практическое использование, чтобы вы могли применять полученные знания в реальных ситуациях.
                    </Typography>
                    <Image
                        src='/center/school/english.jpg'
                        width={1000}
                        height={667}
                        alt='Урок английского'
                        className="h-auto max-h-[70vh] rounded-lg w-full lg:w-1/2"
                    />

                </Box>
            </Box>
            <Content />
        </PageLayout>
    )
}