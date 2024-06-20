import { IMainInfo, INavLink, ISocialMedia } from "./types";

export const mainInfo: IMainInfo = {
    name: 'Название',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officia a iure dolore impedit velit, blanditiis repellat ipsa alias nobis illo iusto, cupiditate perferendis natus omnis iste, libero asperiores! Quis.',
    phone: '+7(968)434-05-20',
    email: 'info@example.ru',
    location:{
        point: 'Moscow, Svobody 6A',
        href: 'https://www.example.ru'
    },
    logoSmall: '/logo/logo-small.svg',
    logoText: '/logo/logo-gorizontal.svg',
    logoVertical: '/logo/logo-vertical.svg',
    logoHorizontal: '/logo/logo-gorizontal.svg'
}

export const socialMedia: ISocialMedia = {
    vk: 'https://vk.com/',
    telegram: 'https://web.telegram.org/',
    instagram: 'https://google.com/'
}

export const navigation: INavLink[] = [
    {
        id: 0,
        name: "Новости",
        href: "#news_anchor",
        anchorLink: true,
    },
    {
        id: 1,
        name: "Группы",
        href: "#groups_anchor",
        anchorLink: true,
    },
    {
        id: 2,
        name: "Галерея",
        href: "#gallery_anchor",
        anchorLink: true,
    },
    {
        id: 3,
        name: "Отзывы",
        href: "#ratings_anchor",
        anchorLink: true,
    }
]