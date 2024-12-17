'use client'
import { schoolAges } from '@/content/content'
import { Typography } from '@mui/material'
import React, { useState } from 'react'

const School = () => {
    const [selected, setSelected] = useState(0)

    return (
        <div className="mt-8 w-full h-screen lg:h-[90vh] max-w-6xl flex lg:flex-row items-center lg:items-start flex-col justify-around px-2">
            <div className="flex flex-col items-center lg:items-start gap-10">
                {schoolAges.map((age, i) =>
                    <div
                        key={i}
                        onClick={() => setSelected(i)}
                        className={`text-gray-600 cursor-pointer p-2 transition-all w-fit rounded-lg ${selected === i ? ' bg-slate-200 scale-105' : ''}`}
                    >
                        <Typography variant='h4' fontWeight='bold'>
                            {age.title}
                        </Typography>
                        <Typography ml={1} variant='h6'>
                            {age.age}
                        </Typography>
                    </div>
                )}
            </div>

            <div className="h-full overflow-hidden lg:w-1/2">
                <div
                    className="flex flex-col  transition-all duration-500"
                    style={{
                        transform: `translateY(${-selected * 102}vh)`,
                    }}
                >
                    {schoolAges.map((age, agesI) =>
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
                            {/* <Typography variant='h6' className='text-4xl'>
                                Индивидуальная программа обучения.<br />
                                ✅Помощь в освоении школьных программ.<br />
                                ✅Помощь в выполнении домашних заданий: русский язык, математика, чтение, окружающий мир.<br />
                                ✅Повышение грамотности ученика.<br />
                                ✅Подготовка к ВПР и подробный разбор заданий
                            </Typography> */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default School