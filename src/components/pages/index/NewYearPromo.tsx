'use client'
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const NewYearPromo = () => {
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
                className={`flex items-center justify-center cursor-pointer fixed bottom-10 right-5 md:right-10 hover:scale-105
                    rounded-full overflow-hidden transition-all duration-300 z-50 shadow-md w-20 h-20 bg-[#f3f4f6] ${isExpanded ? 'opacity-0' : ''}`}
                onClick={handleToggle}
            >
                <Image
                    src='/gift.png' // Путь к картинке подарка
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
                        // border: '1px solid #e5e7eb',
                        border: '12px solid', // Основной border
                        borderImage: `
                    repeating-linear-gradient(
                        45deg,
                        #b81e2b,
                        #b81e2b 20px,
                        white 20px,
                        white 40px
                    )`, // Градиент с поворотом на 45 градусов
                        borderImageSlice: 1, // Разрезаем границу
                        overflow: 'hidden',
                        boxShadow: '0 0px 10px 10px rgba(0, 0, 0, .2)',
                        zIndex: 1000,
                    }}
                >
                    <Image
                        src='/bg/hat-1.svg'
                        className='absolute -top-8 -z-10 opacity-20 -left-8'
                        width={150}
                        height={150}
                        alt='Шапка'
                    />
                    <Image
                        src='/icons/center/birthday/gift.svg'
                        className='absolute -bottom-4 -z-10 opacity-30 -right-4 -rotate-12'
                        width={100}
                        height={100}
                        alt='Шапка'
                    />

                    {/* Заголовок */}
                    <Typography
                        variant='h4'
                        gutterBottom
                        sx={{
                            color: '#056738',
                            fontFamily: 'Balmy, sans-serif', /* Применяем шрифт */
                            fontWeight: 'bold', /* Дополнительные стили */
                        }}
                    >
                        Новогодний<br /> розыгрыш
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
                        12 ЯНВАРЯ 2025 ИТОГИ: 18:00
                    </Typography>

                    {/* Кнопка для перехода к посту в VK */}
                    <a href='https://vk.com/wall-96338049_1867' target='_blank' className='text-lg text-[#056738] hover:text-[#044827] transition-colors font-bold'>
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

export default NewYearPromo;