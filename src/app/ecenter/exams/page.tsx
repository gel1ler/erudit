import type { Metadata } from 'next'
import PageLayout from '@/components/pages/pageLayout'
import { Typography } from '@mui/material'
import ScienceIcon from '@mui/icons-material/Science'; // Физика
import TranslateIcon from '@mui/icons-material/Translate'; // Русский язык
import CalculateIcon from '@mui/icons-material/Calculate'; // Математика
import LaptopIcon from '@mui/icons-material/Laptop'; // Информатика
import LanguageIcon from '@mui/icons-material/Language'; // Английский
import School from '@/components/pages/additional/exams/school';

export const metadata: Metadata = {
    title: 'Эрудит Центр - Школьные предметы',
    description: 'Эффективная подготовка к экзаменам по различным предметам с опытными преподавателями',
}

export default function Home() {
    const className = 'flex items-center space-x-1 text-center text-3xl justify-center'

    return (
        <PageLayout isECenter pageTitle='Школьные предметы'>
            <div className="flex flex-col items-center mb-20">
                <Typography variant='h2' fontWeight='bold' textAlign='center'>
                    Репетиторы по школьной программе
                </Typography>
                <Typography color='gray' textAlign='center'>
                    Нажимайте на кнопки для выбора нужного раздела
                </Typography>

                <School />
            </div>

            <div
                id='#exams_anchor'
                className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-2xl text-white flex flex-col md:flex-row gap-4 items-center justify-between max-w-7xl mx-auto"
            >
                <div className="mb-6 md:mb-0">
                    <h2 className="text-4xl font-bold mb-4">📚 Подготовка к экзаменам 📚</h2>
                    <p className="text-lg mb-6">
                        Наши опытные преподаватели помогут вам успешно сдать экзамены по различным предметам. Мы предлагаем индивидуальные и групповые занятия, адаптированные под ваши потребности и уровень подготовки.
                    </p>
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-2">👩‍🏫 Преподаватели:</h3>
                        <p>Все наши преподаватели имеют высшее педагогическое образование и богатый опыт работы с учениками разных возрастов и уровней подготовки.</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-2">📆 Расписание:</h3>
                        <p>Занятия проводятся по индивидуальному расписанию, учитывая ваши предпочтения и удобное время.</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-2">🏷️ Цена:</h3>
                        <p className="text-xl">От 1500 рублей за занятие</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center md:gap-5 lg:gap-14">
                <Typography variant='h2' className='gradient-text' fontWeight='bold' textAlign='center'>ОГЭ/ЕГЭ</Typography>
                <div className={className}>
                    <ScienceIcon fontSize='large' />
                    <span>Физика</span>
                </div>
                <div className={className}>
                    <TranslateIcon fontSize='large' />
                    <span>Русский язык</span>
                </div>
                <div className={className}>
                    <CalculateIcon fontSize='large' />
                    <span>Математика <br /> (проф/база)</span>
                </div>
                <div className={className}>
                    <LaptopIcon fontSize='large' />
                    <span>Информатика</span>
                </div>
                <div className={className}>
                    <LanguageIcon fontSize='large' />
                    <span>Английский</span>
                </div>
            </div>
        </PageLayout>
    )
}