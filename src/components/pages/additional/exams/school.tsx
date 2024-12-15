'use client'
import { Typography } from '@mui/material'
import React, { useState } from 'react'

const ages = [
    {
        title: 'Начальная школа',
        lessons: [
            {
                name: 'Русский язык (1–4 класс)',
                description: 'Развитие навыков письма, чтения и грамматики.'
            },
            {
                name: 'Литературное чтение (1–4 класс)',
                description: 'Развитие навыков анализа текста и творческого воображения.'
            },
            {
                name: 'Родной язык (русский) (2–4 класс)',
                description: 'Укрепление навыков владения родным языком.'
            },
            {
                name: 'Литературное чтение на родном языке (русском) (2–4 класс)',
                description: 'Развитие навыков чтения и понимания текста на родном языке.'
            },
            {
                name: 'Иностранный язык (английский) (2–4 класс)',
                description: 'Основы английского языка: чтение, письмо, разговорная речь.'
            },
            {
                name: 'Математика (1–4 класс)',
                description: 'Развитие навыков счета, логики и решения задач.'
            }
        ]
    },
    {
        title: 'Средняя школа',
        lessons: [
            {
                name: 'Русский язык (5–8 класс)',
                description: 'Углубленное изучение грамматики, стилистики и литературного анализа.'
            },
            {
                name: 'Литература (5–8 класс)',
                description: 'Изучение классической и современной литературы, анализ текста.'
            },
            {
                name: 'Родной язык (русский) (5–8 класс)',
                description: 'Развитие навыков письма, устной речи и культуры речи.'
            },
            {
                name: 'Иностранный язык (английский) (5–8 класс)',
                description: 'Развитие навыков чтения, письма, аудирования и говорения.'
            },
            {
                name: 'Математика (5–8 класс)',
                description: 'Изучение алгебры, геометрии и решения задач повышенной сложности.'
            },
            {
                name: 'Биология (5–8 класс)',
                description: 'Изучение основ биологии, экосистем и живых организмов.'
            },
        ]
    },
    {
        title: 'Старшая школа',
        lessons: [
            {
                name: 'Русский язык (9–11 класс)',
                description: 'Подготовка к ЕГЭ: грамматика, стилистика, анализ текста.'
            },
            {
                name: 'Литература (9–11 класс)',
                description: 'Изучение классической и современной литературы, подготовка к ЕГЭ.'
            },
            {
                name: 'Иностранный язык (английский) (9–11 класс)',
                description: 'Подготовка к ЕГЭ: чтение, письмо, аудирование, говорение.'
            },
            {
                name: 'Математика (9–11 класс)',
                description: 'Подготовка к ЕГЭ: алгебра, геометрия, решение задач.'
            },
            {
                name: 'Физика (9–11 класс)',
                description: 'Изучение физических законов, подготовка к ЕГЭ.'
            },
            {
                name: 'Химия (9–11 класс)',
                description: 'Изучение химических реакций, подготовка к ЕГЭ.'
            },
            {
                name: 'Обществознание (9–11 класс)',
                description: 'Подготовка к ЕГЭ: экономика, политика, право, социальные науки.'
            }
        ]
    }
];

const School = () => {
    const [selected, setSelected] = useState(0)

    return (
        <div className="mt-8 w-full h-screen lg:h-[60vh] max-w-6xl flex lg:flex-row items-center lg:items-start flex-col justify-around px-2">
            <div className="flex flex-col items-center lg:items-start gap-10">
                {ages.map((age, i) =>
                    <Typography
                        onClick={() => setSelected(i)}
                        variant='h4'
                        fontWeight='bold'
                        className={`text-gray-600 cursor-pointer p-2 transition-all w-fit rounded-lg ${selected === i ? ' bg-slate-200 scale-105' : ''}`}
                    >
                        {age.title}
                    </Typography>
                )}

            </div>

            <div className="h-full overflow-hidden lg:w-1/2">
                <div
                    className="flex flex-col  transition-all duration-500"
                    style={{
                        transform: `translateY(${-selected * 102}vh)`,
                    }}
                >
                    {ages.map((age, agesI) =>
                        <div
                            key={agesI}
                            className='mt-4 space-y-4 w-full transition-all duration-300 h-[100vh] flex flex-col text-center lg:text-left items-center lg:items-start'
                            
                        >
                            {age.lessons.map((lesson, i) =>
                                <div className="flex items-start space-x-4" key={i}>
                                    <span className="text-2xl w-5 font-bold text-blue-500">{i + 1}</span>
                                    <div>
                                        <Typography variant='h6' className='w-fit' fontWeight='medium'>
                                            {lesson.name}
                                        </Typography>
                                        <Typography variant='body2' >
                                            {lesson.description}
                                        </Typography>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default School