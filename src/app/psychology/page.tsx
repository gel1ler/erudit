import type { Metadata } from 'next'
import PageLayout from '@/components/pages/pageLayout'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { ReactNode } from 'react'

export const metadata: Metadata = {
    title: 'Эрудит Центр - Занятия с психологом',
    description: 'Детский центр Маленький Эрудит предлагает уникальные занятия с психологом для дошкольников, направленные на развитие эмоционального интеллекта, навыков общения и гармоничного формирования личности.',
}

const Item = ({
    children, className, icon, title
}: {
    children: ReactNode, className: string, icon: string, title: string
}) =>

    <div className={`flex flex-col justify-center items-center gap-2`}>
        <div className={`${className} rounded-full aspect-square relative w-40 h-40`}>
            <Image fill className='p-6' src={`/icons/additional/psychology/${icon}.svg`} alt='Иконка' />
        </div>
        <Typography variant='h4'>{title}</Typography>
        {children}
    </div>

export default function Home() {
    return (
        <PageLayout pageTitle='Психолог'>
            <div className="container mx-auto p-8">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-4 mb-20">
                        <Typography variant='h3'>Занятия с психологом в дошкольном возрасте </Typography>
                        <Typography variant='h6'>1. Помогают развить эмоциональный интеллект и навыки общения</Typography>
                        <Typography variant='h6'>2. Обучают управлять чувствами и преодолевать трудности</Typography>
                        <Typography variant='h6'>3. Способствуют гармоничному развитию личности ребенка 🌟</Typography>
                    </div>
                    <Image
                        src='/additional/psycologist.jpeg'
                        alt='Занятие с психологом'
                        width={700}
                        height={550}
                        className='rounded-xl'
                    />
                </div>
                <div className="grid grid-cols-3 gap-10 max-w-5xl mx-auto">
                    <Item title='Восприятие' icon='brain' className='bg-red-300'> </Item>
                    <Item title='Внимание' icon='eye' className='bg-orange-300'> </Item>
                    <Item title='Воображение' icon='lightbulb' className='bg-amber-300'> </Item>
                    <Item title='Память' icon='memory' className='bg-yellow-300'> </Item>
                    <Item title='Мышление' icon='gears' className='bg-indigo-400'> </Item>
                    <Item title='Координация' icon='move' className='bg-emerald-300'> </Item>
                </div>
                <Typography variant='h6' mt={4} lineHeight={2} letterSpacing={1}>
                    Занятия у детей развивают <b>высшие психические функции</b>, так необходимые при дальнейшем обучении в школе. Помимо этого повышается активность психомоторики детей, ребята совершенствуют графомоторные навыки, зрительно-моторную координацию (координацию в системе &quot;глаз-рука&quot;), развивают мелкую моторику рук, нейронные межполушарные связи. Также дети учатся ориентироваться в пространстве и на листе бумаги, чувствовать и понимать своё тело, выполняют дыхательные упражнения. 🪴
                </Typography>
            </div>
        </PageLayout >
    )
}