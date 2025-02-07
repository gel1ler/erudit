'use client'
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Promo23Feb = () => {
    const [isExpanded, setIsExpanded] = useState(false); // Состояние для раскрытия блока
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'))
    const router = useRouter()

    // Функция для раскрытия/сворачивания блока
    const handleToggle = () => {
        if (isMd)
            setIsExpanded(!isExpanded)
        else {
            router.push('#news_anchor')
            setIsExpanded(true)
        }
    };

    return (
        <>
            {/* Круглый блок с картинкой подарка */}
            <Box
                className={`flex items-center justify-center cursor-pointer fixed bottom-10 right-5 md:right-10 hover:scale-105 p-4
                    rounded-full overflow-hidden transition-all duration-300 z-50 shadow-md w-20 h-20 bg-[#f3f4f6] ${isExpanded ? 'opacity-0' : ''}`}
                onClick={handleToggle}
            >
                <Image
                    src='/promo/gift.png' // Путь к картинке подарка
                    alt='Подарок'
                    width={100}
                    height={100}
                    className='animate-shake' // Анимация тряски
                />
            </Box>

            {/* Раскрытый блок с информацией */}
            {isMd ?
                <Box
                    className={`fixed bottom-10 right-10 transition-all duration-500 flex flex-col items-center text-center p-4 rounded-xl w-[380px] pt-8 
                    ${isExpanded ? '' : 'translate-x-[200%]'}`
                    }
                    sx={{
                        backgroundColor: '#f3f4f6',
                        border: '12px solid', // Основной border
                        borderImage: `
                    repeating-linear-gradient(
                        45deg,
                        #ffab57,
                        #ffab57 20px,
                        #303030 20px,
                        #303030 40px
                    )`, // Градиент с поворотом на 45 градусов
                        borderImageSlice: 1, // Разрезаем границу
                        overflow: 'hidden',
                        boxShadow: '0 0px 10px 10px rgba(0, 0, 0, .2)',
                        zIndex: 1000,
                    }}
                >
                    <Image
                        src='/promo/feb23/phone.png'
                        className='absolute -top-8 -z-10 opacity-20 -left-8'
                        width={150}
                        height={150}
                        alt='Шапка'
                    />
                    <Image
                        src='/promo/feb23/radio.png'
                        className='absolute -bottom-4 -z-10 opacity-30 -right-20 -rotate-12'
                        width={300}
                        height={300}
                        alt='Шапка'
                    />
                    <Image
                        src='/promo/feb23/photo.png'
                        className='absolute top-10 -z-10 opacity-30 -right-10 rotate-12'
                        width={150}
                        height={150}
                        alt='Шапка'
                    />

                    {/* Заголовок */}
                    <Typography
                        variant='h4'
                        gutterBottom
                        sx={{
                            color: '#f57b00',
                            fontFamily: 'Balmy, sans-serif', /* Применяем шрифт */
                            fontWeight: 'bold', /* Дополнительные стили */
                        }}
                    >
                        Розыгрыш к 23 февраля
                    </Typography>

                    {/* Описание */}
                    <Typography
                        gutterBottom
                        sx={{
                            color: '#b81e2b',
                            fontFamily: 'Balmy, sans-serif', /* Применяем шрифт */
                            fontWeight: 'bold', /* Дополнительные стили */
                        }}
                    >
                        ИТОГИ: 23 ФЕВРАЛЯ В 18:00
                    </Typography>

                    {/* Призы */}
                    <Box sx={{ textAlign: 'center', width: '100%', mt: 2 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#056738' }}>
                            🥇 1 место: Интерактивная игрушка alilo Зайка-Математик
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#056738' }}>
                            🥈 2 место: Детский фотоаппарат «Динозавр для юных фотографов»
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#056738' }}>
                            🥉 3 место: Перезаряжаемые детские рации
                        </Typography>
                    </Box>

                    {/* Кнопка для перехода к посту в VK */}
                    <a
                        href='https://vk.com/wall-96338049_1950'
                        target='_blank'
                        className='text-lg transition-colors font-bold mt-4'
                        style={{
                            fontFamily: 'Balmy, sans-serif',
                            color: '#b81e2b',
                            textDecoration: 'underline',
                        }}
                    >
                        Участвовать
                    </a>

                    {/* Кнопка закрытия */}
                    <Box
                        className='absolute top-2 right-4 cursor-pointer'
                        onClick={handleToggle}
                    >
                        <Typography sx={{ fontSize: '1.25rem' }} fontWeight={900}>
                            ✕
                        </Typography>
                    </Box>
                </Box>
                : null
            }
        </>
    );
};

export default Promo23Feb;