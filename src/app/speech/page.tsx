import type { Metadata } from 'next'
import PageLayout from '@/components/pages/pageLayout'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Маленький Эрудит - Детский сад',
    description: 'Добро пожаловать в наш детский сад! Мы предлагаем увлекательное и развивающее пространство для ваших детей, где они смогут раскрыть свой потенциал, обрести новых друзей и получить качественное дошкольное образование.',
}

export default function Home() {
    return (
        <PageLayout id={0} pageTitle='Детский сад'>
            <div className="bg-gradient-to-r from-pink-500 to-yellow-500 p-8 rounded-2xl shadow-lg text-white flex flex-col md:flex-row gap-4 items-center justify-between max-w-7xl mx-auto">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-4xl font-bold mb-4">👶 Маленький Эрудит - Детский сад</h2>
                    <p className="text-lg mb-6">
                        Добро пожаловать в наш детский сад! Мы предлагаем увлекательное и развивающее пространство для ваших детей, где они смогут раскрыть свой потенциал, обрести новых друзей и получить качественное дошкольное образование.
                    </p>
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-2">🎨 Развивающие занятия:</h3>
                        <p>Мы предлагаем разнообразные занятия, направленные на развитие творческих способностей, логического мышления, речи и физической активности.</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-2">👩‍🏫 Опытные воспитатели:</h3>
                        <p>Наши воспитатели – это квалифицированные специалисты с большим опытом работы с детьми, которые любят свою работу и умеют найти подход к каждому ребенку.</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-2">🏫 Современное оборудование:</h3>
                        <p>Детский сад оборудован современными игровыми и учебными зонами, которые создают комфортную и безопасную среду для развития и обучения.</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-2">🏷️ Цена:</h3>
                        <p className="text-xl">От 20.000 рублей в месяц</p>
                    </div>
                </div>
                <Image src="/additional/kids.jpg" alt="Детский сад" width={665} height={1000} className=" rounded-lg max-h-[70vh]" />
            </div>

            <div className="p-8 rounded-2xl max-w-7xl mx-auto mt-10">
                <h2 className="text-4xl font-bold mb-4 text-center">📅 Расписание занятий 📅</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">10:00 – 11:00</h3>
                        <p className="font-bold">Занятие:</p>
                        <p>Творчество и рисование</p>
                        <p className="font-bold">Воспитатель:</p>
                        <p>Ольга Николаевна</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">11:00 – 12:00</h3>
                        <p className="font-bold">Занятие:</p>
                        <p>Музыкальная гимнастика</p>
                        <p className="font-bold">Воспитатель:</p>
                        <p>Елена Сергеевна</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">12:00 – 13:00</h3>
                        <p className="font-bold">Занятие:</p>
                        <p>Игры на улице</p>
                        <p className="font-bold">Воспитатель:</p>
                        <p>Анна Викторовна</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">13:00 – 14:00</h3>
                        <p className="font-bold">Занятие:</p>
                        <p>Развитие речи</p>
                        <p className="font-bold">Воспитатель:</p>
                        <p>Мария Ивановна</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">14:00 – 15:00</h3>
                        <p className="font-bold">Занятие:</p>
                        <p>Математические игры</p>
                        <p className="font-bold">Воспитатель:</p>
                        <p>Дмитрий Александрович</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">15:00 – 16:00</h3>
                        <p className="font-bold">Занятие:</p>
                        <p>Творческие мастер-классы</p>
                        <p className="font-bold">Воспитатель:</p>
                        <p>Светлана Петровна</p>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}