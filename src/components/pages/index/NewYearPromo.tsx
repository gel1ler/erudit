'use client'
import { EnrollButton, MoreBtn } from '@/components/UI/form/Buttons';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

const NewYearPromo = () => {
    const [isExpanded, setIsExpanded] = useState(false); // Состояние для раскрытия блока

    // Функция для раскрытия/сворачивания блока
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            {/* Круглый блок с картинкой подарка */}
            <Box
                className={`flex items-center justify-center cursor-pointer fixed bottom-10 right-10 
                    rounded-full overflow-hidden transition-opacity duration-300 z-50 shadow-md w-20 h-20 bg-[#f3f4f6] ${isExpanded ? 'opacity-0' : ''}`}
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

            <Box
                className={`fixed bottom-10 right-10 transition-all duration-500 flex flex-col items-center text-center p-4 rounded-xl w-[380px]
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
                    ) 1`, // Градиент с поворотом на 45 градусов
                    borderRadius: 10,
                    borderImageSlice: 1, // Разрезаем границу
                    overflow: 'hidden',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    zIndex: 1000,
                }}
            >
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
                    12 ЯНВАРЯ 2025 <br /> ИТОГИ: 18:00
                </Typography>

                {/* Кнопка для перехода к посту в VK */}
                <a href='https://vk.com' target='_blank' className='text-lg text-[#056738] font-bold'>
                    Участвовать
                </a>
                {/* Кнопка закрытия */}
                <Box
                    className='absolute top-2 right-4 cursor-pointer'
                    onClick={handleToggle}
                >
                    <Typography sx={{ fontSize: '1.25rem' }} fontWeight='bold'>
                        ✕
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default NewYearPromo;