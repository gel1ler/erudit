import type { Metadata } from 'next'
import PageLayout from '@/components/pages/pageLayout'

export const metadata: Metadata = {
    title: 'Эрудит Центр - Подготовка к экзаменам',
    description: 'Эффективная подготовка к экзаменам по различным предметам с опытными преподавателями',
}

export default function Home() {
    return (
        <PageLayout isECenter id={3} pageTitle='Подготовка к экзаменам'>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-2xl shadow-lg text-white flex flex-col md:flex-row gap-4 items-center justify-between max-w-7xl mx-auto">
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
                {/* <div>
                    <video className="h-auto max-h-[70vh] rounded-lg shadow-lg" autoPlay controls muted>
                        <source src="/icons/center/exams/exams.MP4" type="video/mp4" />
                        Ваш браузер не поддерживает тег видео.
                    </video>
                </div> */}
            </div>

            <div className="p-8 rounded-2xl max-w-7xl mx-auto mt-10">
                <h2 className="text-4xl font-bold mb-4 text-center">📅 Расписание занятий 📅</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">10:00 – 11:00</h3>
                        <p className="font-bold">Предмет:</p>
                        <p>Математика</p>
                        <p className="font-bold">Преподаватель:</p>
                        <p>Анна Петровна</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">11:00 – 12:00</h3>
                        <p className="font-bold">Предмет:</p>
                        <p>Русский язык</p>
                        <p className="font-bold">Преподаватель:</p>
                        <p>Иван Сергеевич</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">12:00 – 13:00</h3>
                        <p className="font-bold">Предмет:</p>
                        <p>Физика</p>
                        <p className="font-bold">Преподаватель:</p>
                        <p>Мария Ивановна</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">13:00 – 14:00</h3>
                        <p className="font-bold">Предмет:</p>
                        <p>Химия</p>
                        <p className="font-bold">Преподаватель:</p>
                        <p>Дмитрий Александрович</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">14:00 – 15:00</h3>
                        <p className="font-bold">Предмет:</p>
                        <p>Биология</p>
                        <p className="font-bold">Преподаватель:</p>
                        <p>Елена Викторовна</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">15:00 – 16:00</h3>
                        <p className="font-bold">Предмет:</p>
                        <p>История</p>
                        <p className="font-bold">Преподаватель:</p>
                        <p>Сергей Иванович</p>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}