import type { Metadata } from 'next'
import PageLayout from '@/components/pages/pageLayout'
import Image from 'next/image'
import { PhoneCall } from '@/components/icons/socialMediaIcons'

export const metadata: Metadata = {
    title: 'Эрудит Центр - Проведение дней рождений',
    description: 'Детский центр "Маленький Эрудит" - это свой маленький мир для каждого ребенка, где его искренне любят, уважают и всегда ждут!',
}

export default function Home() {
    return (
        <PageLayout id={3}>
            {/* <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-8 rounded-2xl shadow-lg text-white text-center max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-4">🎉 Проведение дней рождений 🎉</h2>
                <p className="text-lg mb-6">
                    Отпразднуйте день рождения вашего ребенка в нашем детском центре "Маленький Эрудит"!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">🎈 Весёлое торжество под ключ</h3>
                        <p>
                            Мы предлагаем разнообразие тематических программ, увлекательные мастер-классы, вкусные сладости и праздничный торт.
                        </p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">📸 Фотозона и веселые конкурсы</h3>
                        <p>
                            Создайте незабываемые воспоминания с помощью нашей фотозоны и увлекательных конкурсов.
                        </p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">👩‍🏫 Профессиональные аниматоры</h3>
                        <p>
                            Наши опытные аниматоры сделают праздник ярким и незабываемым для вашего ребенка.
                        </p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">📞 Запись и консультация</h3>
                        <p>
                            Для записи и консультации звоните по телефону: 8(916)796-98-09
                        </p>
                    </div>
                </div>
                <div className="mt-6">
                    <Image
                        src="/path/to/your/birthday-party-image.jpg"
                        alt="День рождения в детском центре"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div> */}


            <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-8 pt-12 rounded-2xl shadow-lg text-white text-center max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold mb-6 animate-bounce">🎉 Проведение дней рождений 🎉</h2>
                <p className="text-xl mb-8">
                    Отпразднуйте день рождения вашего ребенка в нашем детском центре &quot;Маленький Эрудит&quot;!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-3xl font-semibold mb-4">🎈 Весёлое торжество под ключ</h3>
                        <p className="text-lg">
                            Мы предлагаем разнообразие тематических программ, увлекательные мастер-классы, вкусные сладости и праздничный торт.
                        </p>
                    </div>
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-3xl font-semibold mb-4">📸 Фотозона и веселые конкурсы</h3>
                        <p className="text-lg">
                            Создайте незабываемые воспоминания с помощью нашей фотозоны и увлекательных конкурсов.
                        </p>
                    </div>
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-3xl font-semibold mb-4">👩‍🏫 Профессиональные аниматоры</h3>
                        <p className="text-lg">
                            Наши опытные аниматоры сделают праздник ярким и незабываемым для вашего ребенка.
                        </p>
                    </div>
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-3xl font-semibold mb-4">📞 Запись и консультация</h3>
                        <p className="text-lg">
                            Для записи и консультации звоните по телефону:
                        </p>
                        <PhoneCall sx={{ mx: 'auto', width: 'fit-content', fontSize: 18, mt: 1 }} />
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}