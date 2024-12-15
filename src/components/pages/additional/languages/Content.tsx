'use client'
import type { Metadata } from 'next'
import PageLayout from '@/components/pages/pageLayout'
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import LanguageCard from '@/components/pages/additional/languages/languageCard';
import Contacts from '@/components/pages/Contacts/Contacts';

const languages = [
    { name: 'Английский', image: '/icons/center/school/flags/united-kingdom.svg' },
    { name: 'Испанский', image: '/icons/center/school/flags/spain.svg' },
    { name: 'Французский', image: '/icons/center/school/flags/france.svg' },
    { name: 'Немецкий', image: '/icons/center/school/flags/germany.svg' },
    { name: 'Итальянский', image: '/icons/center/school/flags/italy.svg' },
    { name: 'Китайский', image: '/icons/center/school/flags/china.svg' },
];

const Content = () => {
    const [selected, setSelected] = useState<string>()

    return (
        <>
            <Box className="p-8 rounded-2xl max-w-7xl mx-auto mt-10">
                <Typography variant="h3" className="text-center">📅 Доступные языки и преподаватели 📅</Typography>
                <Grid container spacing={4} mt={2}>
                    {languages.map((language, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} className='overflow-hidden'>
                            <LanguageCard setSelected={setSelected} language={language} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Contacts noAos pageTitle={`Иностранные языки${selected ? ` (${selected})` : ''}`} />
        </>
    )
}

export default Content