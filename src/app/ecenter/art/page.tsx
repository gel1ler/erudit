import type { Metadata } from 'next'
import PageLayout from '@/components/pages/ECenter/pageLayout'

export const metadata: Metadata = {
    title: 'Эрудит Центр - Кружки',
    description: 'Детский центр "Маленький Эрудит" - это свой маленький мир для каждого ребенка, где его искренне любят, уважают и всегда ждут!',
}

export default function Home() {
    return (
        <PageLayout id={2}>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-2xl shadow-lg text-white flex flex-col md:flex-row gap-4 items-center justify-between max-w-7xl mx-auto">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-3xl font-bold mb-4">🧪 Приглашаем Вас в наш Экспериментариум! 🔬</h2>
                    <p className="text-lg mb-6">
                        Хотите узнать, почему воздух прозрачный и как им рисовать? 🌬️ <br />
                        Или создать удивительные оптические иллюзии? 👀🤯 <br />
                        А может, вам интересно, как сделать зубную пасту для слона? 🐘🦷 <br />
                        Или провести электрический ток на бумаге? ⚡️📄
                    </p>
                    <p className="text-lg mb-6">
                        Приходите к нам в Экспериментариум и окунитесь в мир захватывающих научных открытий! 🔍🧠
                    </p>
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-2">👩‍🏫 Педагог:</h3>
                        <p>Дарья Дмитриевна Черникова, высшее педагогическое образование, опыт ведения занятий 7 лет</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-2">📆 Расписание:</h3>
                        <p>Понедельник, среда, четверг с 18:40 до 19:40</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-2">🏷️ Цена:</h3>
                        <p className="text-xl">1000 рублей за занятие</p>
                    </div>
                </div>
                <div>
                    <video className="h-auto max-h-[70vh] rounded-lg shadow-lg" autoPlay controls muted>
                        <source src="/icons/center/art/art.MP4"  type="video/mp4" />
                        Ваш браузер не поддерживает тег видео.
                    </video>
                </div>
            </div>
        </PageLayout>
    )
}