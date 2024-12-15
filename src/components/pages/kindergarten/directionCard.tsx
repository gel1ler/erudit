'use client'
import { Typography, useMediaQuery } from '@mui/material'
import Title from '@/components/UI/text/Title'
import { MoreBtn } from '@/components/UI/form/Buttons'
import { ReactNode } from 'react'
import { formatMoney } from '@/services/services'
import { useRouter } from 'next/navigation'

type DirectionCardProps = {
    title: string,
    age: string,
    time: string,
    price1: number,
    priceAll: number,
    children: ReactNode,
    dark?: boolean,
    color: string,
    textColor: string,
    reversed?: boolean,
    id: string,
    setProgram: React.Dispatch<React.SetStateAction<string | undefined>>,
    additional?: boolean,
}

const DirectionCard = ({ title, age, time, price1, priceAll, children, dark, color, textColor, reversed, id, setProgram, additional }: DirectionCardProps) => {
    // const isLg = useMediaQuery('(min-width:1024px)')
    // reversed = isLg ? reversed : false
    const side = reversed ? 'right' : 'left'

    const router = useRouter()

    const handleClick = () => {
        setProgram(title)
        router.push(`#contacts_anchor`)
    }

    return (
        <div className={`w-screen ${dark ? 'bg-slate-100 py-20' : 'py-10'}`} id={id}>
            <div className={`grid px-10 gap-10 max-w-5xl mx-auto ${reversed ? 'md:grid-cols-[2fr_1.5fr]' : 'md:grid-cols-[1.5fr_2fr]'}`}>
                <div className={`flex flex-col ${reversed ? 'md:order-last items-end' : ''}`}>
                    <div className="flex items-center gap-4" data-aos='fade-up'>
                        <Typography className='w-fit px-2 py-[2px] rounded-full' style={{ background: color }} variant='subtitle1' fontWeight={700}>{time}</Typography>
                        <Typography color='gray' variant='h6' fontWeight={700}>{age}</Typography>
                    </div>
                    <Title sx={{ textAlign: side }}>{title}</Title>

                    <div className="ml-2 mt-4">
                        {additional ? <>
                            <Typography textAlign={side} fontWeight='bold' variant='h6' data-aos='fade-up'>НАБОР НА СЕНТЯБРЬ 2025 года</Typography>
                            <Typography textAlign={side} color={textColor} variant='h6' data-aos='fade-up'>Запись сейчас со скидкой - 10%</Typography>
                        </> : null}
                        <Typography textAlign={side} color='gray' variant='h6' data-aos='fade-up'>Стоимость:</Typography>
                        <Typography textAlign={side} data-aos='fade-up' color={textColor} mt={1} fontWeight={800} variant='h5'>{formatMoney(price1)} ₽</Typography>
                        <Typography textAlign={side} data-aos='fade-up'>Разовое посещение</Typography>
                        <Typography textAlign={side} data-aos='fade-up' color={textColor} mt={2} fontWeight={800} variant='h5'>{formatMoney(priceAll)} ₽</Typography>
                        <Typography textAlign={side} data-aos='fade-up' mb={3}>Абонемент на месяц</Typography>
                    </div>
                    <MoreBtn dark aos click={handleClick} text='Записаться' />
                </div>
                {children}
            </div>
        </div>
    )
}

export default DirectionCard