import type { Metadata } from 'next'
import PageLayout from '@/components/pages/pageLayout'
import Image from 'next/image'
import { Typography } from '@mui/material'

export const metadata: Metadata = {
    title: 'Маленький Эрудит - Логопед',
    description: 'Индивидуальные занятия с опытным логопедом для дошкольников. Улучшайте речевые навыки, корректируйте нарушения, развивайте слуховое восприятие и социальные умения вашего ребенка. Занятия адаптированы под индивидуальные потребности каждого малыша. Повысьте шансы на успешное обучение в школе с помощью наших эффективных методик. Запишитесь на бесплатную консультацию уже сегодня!',
}

export default function Home() {
    return (
        <PageLayout pageTitle='Логопед'>
            <div className="container mx-auto p-8">
                <div className="grid lg:grid-cols-2 gap-10 justify-items-center">
                    <div className="flex flex-col gap-4 mb-20">
                        <Typography variant='h3' className='text-center lg:text-left'>Занятия с Логопедом в дошкольном возрасте </Typography>
                        <Typography variant='h6' className='text-center lg:text-left'>1. 🧠 <b>Улучшение речевых навыков</b>: Логопед помогает детям развивать артикуляцию, произношение и словарный запас.</Typography>
                        <Typography variant='h6' className='text-center lg:text-left'>2. 🎯 <b>Индивидуальный подход</b>: Каждый ребенок уникален, и занятия адаптируются под его потребности и уровень развития.</Typography>
                        <Typography variant='h6' className='text-center lg:text-left'>3. 📈 <b>Коррекция нарушений</b>: С помощью логопеда можно эффективно исправить различные речевые недостатки и дислалии.</Typography>
                        <Typography variant='h6' className='text-center lg:text-left'>4. 👂 <b>Развитие слухового восприятия</b>: Занятия помогают улучшить слуховую память и внимание, что важно для обучения в школе.</Typography>
                        <Typography variant='h6' className='text-center lg:text-left'>5. 🤝 <b>Общение и социальные навыки</b>: Логопед учит ребенка не только говорить, но и успешно взаимодействовать с окружающими.</Typography>
                    </div>
                    <video
                        src='/additional/speech.mp4'
                        width={400}
                        height={700}
                        autoPlay
                        muted
                        className='rounded-xl'
                    />
                </div>
                <Typography textAlign='center' variant='h6' mt={10} lineHeight={2} letterSpacing={1}>
                    Занятия у детей развивают <b>высшие психические функции</b>, так необходимые при дальнейшем обучении в школе. Помимо этого повышается активность психомоторики детей, ребята совершенствуют графомоторные навыки, зрительно-моторную координацию (координацию в системе &quot;глаз-рука&quot;), развивают мелкую моторику рук, нейронные межполушарные связи. Также дети учатся ориентироваться в пространстве и на листе бумаги, чувствовать и понимать своё тело, выполняют дыхательные упражнения. 🪴
                </Typography>
            </div>
        </PageLayout>
    )
}