import { TCard } from "@/globalTypes";
import { ActivityType, IMainInfo, INavLink } from "./types";

export const mainInfo: IMainInfo = {
    name: 'Название',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officia a iure dolore impedit velit, blanditiis repellat ipsa alias nobis illo iusto, cupiditate perferendis natus omnis iste, libero asperiores! Quis.',
    phone: '+7(916)796-98-09',
    email: 'info@example.ru',
    logoSmall: '/logo/logo-small.svg',
    logoText: '/logo/logo-gorizontal.svg',
    logoVertical: '/logo/logo-vertical.svg',
    logoHorizontal: '/logo/logo-gorizontal.svg'
}

export const navigation: INavLink[] = [
    {
        id: 0,
        name: "Подготовка к школе",
        href: "/#groups_anchor",
        anchorLink: true,
    },
    {
        id: 1,
        name: "Детский сад",
        href: "/kindergarten",
        anchorLink: true,
    },
]

export const groupsData: TCard[] = [
    {
        title: 'Звездочки',
        schedule: [
            { day: 'ПН', time: '11:30-13:00', subjects: ['Англ. яз', 'Чтение', 'ИЗО'] },
            { day: 'СР', time: '11:30-13:00', subjects: ['Психолог', 'Математика', 'Музыка', 'Логопед'] },
            { day: 'ПТ', time: '11:30-13:00', subjects: ['Чтение', 'Фитнес', 'Математика'] },
        ],
        age: '3 года',
        description: 'Группа для самых маленьких, где каждый ребенок — маленькая звезда'
    },
    {
        title: 'Капельки',
        schedule: [
            { day: 'ПН', time: '17:00-19:00', subjects: ['Логопед', 'Англ. яз', 'Музыка', 'Математика'] },
            { day: 'ЧТ', time: '17:30-19:00', subjects: ['Чтение', 'ИЗО', 'Математика'] },
            { day: 'ПТ', time: '17:00-18:30', subjects: ['Чтение', 'Фитнес', 'Математика'] },
        ],
        age: '3 года',
        description: ''
    },
    {
        title: 'Облачко',
        schedule: [
            { day: 'ПН', time: '11:30-13:30', subjects: ['Чтение', 'Математика', 'ИЗО', 'Англ. яз', 'Англ. яз'] },
            { day: 'СР', time: '11:30-13:30', subjects: ['Чтение', 'Худ. слово', 'Психолог', 'Логопед', 'ИЗО'] },
            { day: 'ПТ', time: '12:00-13:30', subjects: ['ОСОМ', 'Фитнес', 'Математика'] },
        ],
        age: '4 года',
        description: 'Легкие и свободные, как облачка в небе, с множеством идей и игр'
    },
    {
        title: 'Цветочки',
        schedule: [
            { day: 'ПН', time: '17:00-19:30', subjects: ['Англ. яз', 'Музыка', 'Чтение', 'Математика', 'Англ. яз'] },
            { day: 'ВТ', time: '17:00-19:30', subjects: ['Чтение', 'Психолог', 'Худ. слово', 'Математика', 'ОСОМ'] },
            { day: 'ЧТ', time: '18:00-18:30', subjects: ['Фитнес', 'ИЗО', 'Логопед'] },
        ],
        age: '4 года',
        description: ''
    },
    {
        title: 'Улыбки',
        schedule: [
            { day: 'ВТ', time: '17:00-19:00', subjects: ['Психолог', 'Чтение', "Математика", 'Англ. яз'] },
            { day: 'СР', time: '17:30-19:30', subjects: ['Музыка', 'ИЗО', 'Англ. яз', 'ОСОМ'] },
            { day: 'ЧТ', time: '17:00-19:30', subjects: ['Чтение', 'Фитнес', 'Математика', 'Логопед', 'Худ. слово'] },
        ],
        age: '5 лет',
        description: 'Веселые и дружные, как солнечные лучи'
    },
    {
        title: 'Солнышко',
        schedule: [
            { day: 'ПН', time: '10:00-12:30', subjects: ['Чтение', "Математика", 'Англ. яз', 'ИЗО', 'Англ. яз'] },
            { day: 'СР', time: '10:00-12:30', subjects: ['Чтение', 'Худ. слово', 'Психолог', 'Музыка', 'Логопед'] },
            { day: 'ПТ', time: '10:00-11:30', subjects: ['Математика', 'Фитнес', "ОСОМ"] },
        ],
        age: '5 лет',
        description: 'Активные и энергичные, как солнечный день'
    },
    {
        title: 'Светлячки',
        schedule: [
            { day: 'ПН', time: '17:00-19:30', subjects: ["Математика", 'Психолог', 'Англ. яз', 'Логопед', 'Худ. слово'] },
            { day: 'СР', time: '17:00-19:00', subjects: ['Чтение', 'Англ. яз', 'ОСОМ', 'Музыка'] },
            { day: 'ПТ', time: '17:00-19:00', subjects: ['Чтение', 'Математика', "ИЗО", 'Фитнес'] },
        ],
        age: '5 лет',
        description: ''
    },
    {
        title: 'Клубнички',
        schedule: [
            { day: 'ВТ', time: '17:00-19:30', subjects: ['Англ. яз', 'Англ. яз', 'Психолог', 'Чтение', "Математика"] },
            { day: 'СР', time: '17:30-19:30', subjects: ['Математика', 'Музыка', 'ИЗО', 'Худ. слово'] },
            { day: 'ЧТ', time: '17:30-19:30', subjects: ['Чтение', 'Логопед', 'Фитнес', 'ОСОМ'] },
        ],
        age: '5-6 лет',
        description: ''
    },
    {
        title: 'Ромашки',
        schedule: [
            { day: 'ПН', time: '9:00-11:30', subjects: ["Математика", 'Разв. речи', 'Англ. яз', 'Англ. яз', 'ИЗО'] },
            { day: 'СР', time: '9:00-11:30', subjects: ['Чтение', 'Чтение', 'Психолог', 'Музыка', 'Логопед'] },
            { day: 'ПТ', time: '9:00-19:30', subjects: ['Математика', "Письмо", 'Фитнес'] },
        ],
        age: '6 лет',
        description: 'Светлые и спокойные, как поле ромашек'
    },
    {
        title: 'Ручейки',
        schedule: [
            { day: 'ПН', time: '17:00-19:30', subjects: ['Музыка', "Математика", 'Психолог', 'Англ. яз', 'Логопед'] },
            { day: 'СР', time: '17:00-19:00', subjects: ['Чтение', 'Чтение', 'Англ. яз', 'Разв. речи'] },
            { day: 'ПТ', time: '17:30-19:30', subjects: ['Математика', 'Фитнес', "Письмо", 'ИЗО'] },
        ],
        age: '6 лет',
        description: ''
    }
]

export const additionalActivities: ActivityType[] = [
    {
        title: 'Кружки',
        description: 'Развивающие кружки для детей и взрослых по различным интересам',
        href: '/art',
        img: '/icons/additional/art.svg',
        icons: [
            {
                src: '/icons/center/elders/language.svg',
                position: ['', '', 20, 30],
                size: 100,
                rotate: -30
            },
            {
                src: '/icons/center/elders/graduation.svg',
                position: [-10, 10, '', ''],
                size: 120,
                rotate: 30
            },
            {
                src: '/icons/center/elders/education.svg',
                position: ['', -5, -20, ''],
                size: 150,
                rotate: -30
            },
            {
                src: '/icons/center/elders/exam.svg',
                position: [40, '', '', '15%'],
                size: 150,
                rotate: -30
            },
        ]
    },
    {
        title: 'Проведение дней рождений',
        description: 'Организуем незабываемый день рождения для вашего ребенка',
        href: '/birthdays',
        img: '/icons/additional/birthday.svg',
        icons: [
            {
                src: '/icons/center/birthday/cake.svg',
                position: ['', '', -50, -20],
                size: 150,
                rotate: 30
            },
            {
                src: '/icons/center/birthday/confetti.svg',
                position: [-10, '', '', '50%'],
                size: 150,
                rotate: 10,
                noMd: true,
                opacity: 0.6
            },
            {
                src: '/icons/center/birthday/gift.svg',
                position: [5, '', '', '10%'],
                size: 150,
                rotate: 5,
                opacity: 0.6
            },
            {
                src: '/icons/center/birthday/hat.svg',
                position: ['', 15, 20, ''],
                size: 150,
                rotate: -25
            },
        ]
    },
    {
        title: 'Логопед',
        description: 'Поможем вашему ребенку развить речевые навыки и улучшить коммуникацию',
        href: '/speech',
        img: '/icons/additional/speech.svg',
        icons: [
            {
                src: '/icons/additional/speech-therapy/book.svg',
                position: ['', '', 20, 0],
                size: 150,
                rotate: -30
            },
            {
                src: '/icons/additional/speech-therapy/microphone.svg',
                position: [-10, 10, '', ''],
                size: 120,
                rotate: 30
            },
            {
                src: '/icons/additional/speech-therapy/puzzle.svg',
                position: ['', -5, -20, ''],
                size: 150,
                rotate: -160
            },
            {
                src: '/icons/additional/speech-therapy/speech-bubble.svg',
                position: [10, '', '', '5%'],
                size: 150,
                rotate: -30
            },
        ]
    },
    {
        title: 'Психолог',
        description: 'Поможем вам и вашим детям справиться с психологическими трудностями',
        href: '/psychology',
        img: 'icons/additional/psychology.svg',
        icons: [
            {
                src: '/icons/additional/psychology/brain.svg',
                position: ['', '', 20, 30],
                size: 100,
                rotate: -30
            },
            {
                src: '/icons/additional/psychology/heart.svg',
                position: [-10, '10%', '', ''],
                size: 120,
                rotate: 30
            },
            {
                src: '/icons/additional/psychology/lightbulb.svg',
                position: ['', -5, -20, ''],
                size: 150,
                rotate: -30
            },
            {
                src: '/icons/additional/psychology/chat.svg',
                position: [40, '', '', '15%'],
                size: 150,
                rotate: 10
            },
        ]
    },
];

export const ECenter: ActivityType[] = [
    {
        title: 'Иностранные языки',
        description: "Обучение иностранным языкам с акцентом на практическое использование и свободное общение",
        href: '/ecenter/languages',
        icons: [
            {
                src: '/icons/center/elders/language.svg',
                position: ['', '', 20, 30],
                size: 100,
                rotate: -30
            },
            {
                src: '/icons/center/elders/graduation.svg',
                position: [-10, 10, '', ''],
                size: 120,
                rotate: 30
            },
            {
                src: '/icons/center/elders/education.svg',
                position: ['', -5, -20, ''],
                size: 150,
                rotate: -30
            },
            {
                src: '/icons/center/elders/exam.svg',
                position: [40, '', '', '15%'],
                size: 150,
                rotate: -30
            },
        ]
    },
    {
        title: 'Школьные предметы',
        subtitle: 'И подготовка к экзаменам (ОГЭ, ЕГЭ)',
        description: "Эффективная подготовка к экзаменам по различным предметам с опытными преподавателями",
        href: '/ecenter/exams',
        icons: [
            {
                src: '/icons/center/school/test.svg',
                position: ['', '', '35%', 10],
                size: 140,
                rotate: 20
            },
            {
                src: '/icons/center/school/calculator.svg',
                position: ['', 25, 25, ''],
                size: 120,
                rotate: -10
            },
            {
                src: '/icons/center/school/target.svg',
                position: [-15, '20%', '', ''],
                size: 150,
                rotate: 65
            },
            {
                src: '/icons/center/school/studying.svg',
                position: ['', '', -15, '25%'],
                size: 120,
                rotate: -16,
                noMd: true,
            },
        ]
    },
    {
        title: 'Летний клуб',
        description: 'Детский лагерь с увлекательной программой для детей от 7 до 13 лет',
        href: '/camp',
        icons: [
            {
                src: '/icons/center/camp/campfire.svg',
                position: ['', -10, 40, ''],
                size: 150,
                rotate: -10
            },
            {
                src: '/icons/center/camp/tent.svg',
                position: ['', '', -15, 0],
                size: 120,
                rotate: -10
            },
            {
                src: '/icons/center/camp/flashlight.svg',
                position: [20, '', '', '15%'],
                size: 100,
                rotate: 75
            },
        ]
    },
    {
        title: 'Кружки',
        description: 'Рисование, лепка, живопись, эксперименты и много другое',
        href: '/art',
        icons: [
            {
                src: '/icons/center/art/theatre.svg',
                position: ['', '', '25%', 10],
                size: 100,
                rotate: 0
            },
            {
                src: '/icons/center/art/art.svg',
                position: ['', 25, 25, ''],
                size: 120,
                rotate: -10
            },
            {
                src: '/icons/center/art/sculpture.svg',
                position: [5, -15, '', ''],
                size: 150,
                rotate: -25
            },
        ]
    },
]