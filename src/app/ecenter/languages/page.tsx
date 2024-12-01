import type { Metadata } from 'next'
import PageLayout from '@/components/pages/pageLayout'
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { MoreBtn } from '@/components/UI/form/Buttons';

export const metadata: Metadata = {
    title: 'Эрудит Центр - Иностранные языки',
    description: 'Обучение иностранным языкам с акцентом на практическое использование и свободное общение',
}

const languages = [
    { name: 'Английский', image: '/icons/center/school/flags/united-kingdom.svg', teacher: 'Анна Петровна' },
    { name: 'Испанский', image: '/icons/center/school/flags/spain.svg', teacher: 'Иван Сергеевич' },
    { name: 'Французский', image: '/icons/center/school/flags/france.svg', teacher: 'Мария Ивановна' },
    { name: 'Немецкий', image: '/icons/center/school/flags/germany.svg', teacher: 'Дмитрий Александрович' },
    { name: 'Итальянский', image: '/icons/center/school/flags/italy.svg', teacher: 'Елена Викторовна' },
];

export default function Home() {
    return (
        <PageLayout isECenter id={0} pageTitle='Иностранные языки'>
            <Box className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-2xl shadow-lg text-white flex flex-col items-center justify-center max-w-7xl mx-auto">
                <Typography variant="h2" className="text-4xl font-bold mb-4 text-center">🌍 Обучение иностранным языкам 🌍</Typography>
                <Box className='flex flex-col lg:flex-row gap-10 mt-5'>
                    <Typography variant="h6" className="text-lg mb-6 w-full lg:w-1/2 text-center lg:text-left">
                        Наши курсы иностранных языков разработаны для того, чтобы вы могли свободно общаться на новом языке. Мы предлагаем обучение с акцентом на практическое использование, чтобы вы могли применять полученные знания в реальных ситуациях.
                    </Typography>
                    <Image
                        src='/center/school/english.jpg'
                        width={1000}
                        height={667}
                        alt='Урок английского'
                        className="h-auto max-h-[70vh] rounded-lg shadow-lg w-full lg:w-1/2"
                    />

                </Box>
            </Box>

            <Box className="p-8 rounded-2xl max-w-7xl mx-auto mt-10">
                <Typography variant="h3" className="text-center">📅 Доступные языки и преподаватели 📅</Typography>
                <Grid container spacing={4} mt={2}>
                    {languages.map((language, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box className="group shadow-lg rounded-lg aspect-video relative overflow-hidden cursor-pointer flex items-center justify-center flex-col">
                                <Image
                                    fill
                                    src={language.image}
                                    alt={language.name}
                                    className='w-full h-full top-0 left-0 object-cover -z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-300'
                                />
                                <Typography gutterBottom variant="h4" textAlign='center' fontWeight={600}>
                                    {language.name}
                                </Typography>
                                <Typography variant="body1" textAlign='center' fontWeight={600}>
                                    Преподаватель: {language.teacher}
                                </Typography>
                                <MoreBtn href='/' text='Расписание' />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </PageLayout>
    )
}