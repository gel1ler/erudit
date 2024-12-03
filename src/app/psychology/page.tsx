import type { Metadata } from 'next'
import PageLayout from '@/components/pages/pageLayout'
import Image from 'next/image'
import { Typography } from '@mui/material'

export const metadata: Metadata = {
    title: 'Эрудит Центр - Занятия с психологом',
    description: 'Детский центр Маленький Эрудит предлагает уникальные занятия с психологом для дошкольников, направленные на развитие эмоционального интеллекта, навыков общения и гармоничного формирования личности.',
}

export default function Home() {
    return (
        <PageLayout id={3} pageTitle='Психолог'>
            <div className="container mx-auto p-8">
                <div className="flex flex-col items-center gap-2 mb-20">
                    <Typography variant='h3' textAlign='center'>Занятия с психологом в дошкольном возрасте </Typography>
                    <Typography variant='h5' textAlign='center'>1. Помогают развить эмоциональный интеллект и навыки общения</Typography>
                    <Typography variant='h5' textAlign='center'>2. Обучают управлять чувствами и преодолевать трудности</Typography>
                    <Typography variant='h5' textAlign='center'>3. Способствуют гармоничному развитию личности ребенка 🌟</Typography>
                </div>
                <h2 className="text-3xl font-bold text-center mb-6 text-green-600">
                    <div className="inline-block mr-2 bg-slate-400" /> Задание-лабиринт: ищем подарок! 🤩
                </h2>
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <p className="text-lg text-gray-700 mb-4">
                        Наши дошкольники отправились в увлекательное путешествие по лабиринту, чтобы найти спрятанный подарок! 🕹️ Решая задачки и преодолевая препятствия, они развивали логику, внимание и память. А в конце ждал сюрприз - радостные эмоции и чувство достижения цели! 👏🏻
                    </p>
                    <div className="mb-4">
                        <Image src="/path/to/video-placeholder.jpg" alt="Задание-лабиринт" width={800} height={450} className="rounded-lg shadow-md" />
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">
                    <div className="inline-block mr-2 bg-slate-400" /> Занятия с психологом 🧠
                </h2>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <p className="text-lg text-gray-700">
                        Развивают у детей высшие психические функции, так необходимые при дальнейшем обучении в школе. Это и восприятие, и внимание, и память, и воображение, и, конечно же, мышление. Помимо этого повышается активность психомоторики детей, ребята совершенствуют графомоторные навыки, зрительно-моторную координацию (координацию в системе &quot;глаз-рука&quot;), развивают мелкую моторику рук, нейронные межполушарные связи. Также дети учатся ориентироваться в пространстве и на листе бумаги, чувствовать и понимать своё тело, выполняют дыхательные упражнения. 🪴
                    </p>
                </div>
            </div >
        </PageLayout >
    )
}