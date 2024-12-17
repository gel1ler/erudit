'use client'
import { schoolAges } from '@/content/content'
import { Typography } from '@mui/material'
import React, { useState } from 'react'

const School = () => {
    const [selected, setSelected] = useState(0)

    return (
        <div className="mt-8 w-full lg:h-[90vh] max-w-6xl flex lg:flex-row items-center lg:items-start flex-col justify-around px-2">
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

            <div className="h-screen lg:h-full overflow-hidden lg:w-1/2">
                <div
                    className="flex flex-col  transition-all duration-500"
                    style={{
                        transform: `translateY(${-selected * 102}vh)`,
                    }}
                >
                    {schoolAges.map((age, agesI) =>
                        <div
                            key={agesI}
                            className='mt-4 space-y-4 w-full transition-all duration-500 h-[100vh] flex flex-col text-center lg:text-left items-center lg:items-start'
                            style={{
                                opacity: agesI === selected? 1 : 0,
                            }}
                        >

                            {age.lessons.map((lesson, i) =>
                                <div className="flex items-start space-x-4" key={i}>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="flex justify-center lg:justify-start w-full gap-2">
                                            <span className="text-2xl w-5 font-bold text-blue-500">{i + 1}</span>
                                            <Typography variant='h6' className='w-fit' fontWeight='medium'>
                                                {lesson.name}
                                            </Typography>
                                        </div>
                                        <Typography variant='body2' >
                                            {lesson.description}
                                        </Typography>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div >
        </div >
    )
}

export default School