import type { Metadata } from 'next'
import PageLayout from '@/components/pages/pageLayout'

export const metadata: Metadata = {
    title: 'Эрудит Центр - Лагерь Эрудит',
    description: 'Детский центр "Маленький Эрудит" - это свой маленький мир для каждого ребенка, где его искренне любят, уважают и всегда ждут!',
}

export default function Home() {
    return (
        <PageLayout id={1} isECenter pageTitle='Детский лагерь'>

            {/* HERO */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-8 rounded-2xl shadow-lg text-white text-center max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-4">🏕️ Для детей от 7 до 12 лет 🏕️</h2>
                <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2">📅 Смены:</h3>
                    <ul className="list-disc list-inside text-center mx-auto w-fit">
                        <li>1 смена: 20 июня - 30 июня</li>
                        <li>2 смена: 10 июля - 20 июля</li>
                        <li>3 смена: 1 августа - 10 августа</li>
                    </ul>
                </div>
                <p className="text-lg">
                    Присоединяйтесь к нам и проведите незабываемое лето в лагере &quot;Эрудит&quot;!
                </p>
            </div>

            {/* SCHEDULE */}
            <div className="p-8 rounded-2xl max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 text-center">📅 Расписание лагеря &quot;Эрудит&quot;</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">12:00 – 13:00</h3>
                        <p className="font-bold">Деятельность:</p>
                        <p>Урок 1</p>
                        <p className="font-bold">Пояснение:</p>
                        <p>Встреча детей, повторение пройденного материала/ тестирование</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">13:00 – 13:30</h3>
                        <p className="font-bold">Деятельность:</p>
                        <p>Перекус</p>
                        <p className="font-bold">Пояснение:</p>
                        <p>Перекус фруктами, соки/чай</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">13:30 – 14:30</h3>
                        <p className="font-bold">Деятельность:</p>
                        <p>Урок 2</p>
                        <p className="font-bold">Пояснение:</p>
                        <p>Разговорная практика, чтение, письмо, грамматика, творческие занятия</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">14:30 – 15:00</h3>
                        <p className="font-bold">Деятельность:</p>
                        <p>Обед</p>
                        <p className="font-bold">Пояснение:</p>
                        <p>Полноценный обед</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">15:00 – 16:30</h3>
                        <p className="font-bold">Деятельность:</p>
                        <p>Игры на свежем воздухе</p>
                        <p className="font-bold">Пояснение:</p>
                        <p>Прогулки, экскурсии и игровые мероприятия</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">16:30 – 17:00</h3>
                        <p className="font-bold">Деятельность:</p>
                        <p>Игровые методики изучения</p>
                        <p className="font-bold">Пояснение:</p>
                        <p>Фильмы, мультфильмы, развлекательные и познавательные видео на английском языке</p>
                    </div>
                </div>
            </div>

            {/* THEME */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-8 rounded-2xl shadow-lg text-white">
                <h2 className="text-4xl font-bold mb-4 text-center">📅 Тематика по дням 📅</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">1 День</h3>
                        <p className="font-bold">Тема:</p>
                        <p>“Экскурсия по миру”</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">2 День</h3>
                        <p className="font-bold">Тема:</p>
                        <p>“Праздники вселенной”</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">3 День</h3>
                        <p className="font-bold">Тема:</p>
                        <p>“Моя будущая профессия”</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">4 День</h3>
                        <p className="font-bold">Тема:</p>
                        <p>“Мир волшебства”</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">5 День</h3>
                        <p className="font-bold">Тема:</p>
                        <p>“Я – изобретатель”</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">6 День</h3>
                        <p className="font-bold">Тема:</p>
                        <p>“Мир мультфильмов”</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">7 День</h3>
                        <p className="font-bold">Тема:</p>
                        <p>“Танцор диско”</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">8 День</h3>
                        <p className="font-bold">Тема:</p>
                        <p>“Музыка времён”</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">9 День</h3>
                        <p className="font-bold">Тема:</p>
                        <p>“В мире животных”</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">10 День</h3>
                        <p className="font-bold">Тема:</p>
                        <p>“Лучшие развлечения мира”</p>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

