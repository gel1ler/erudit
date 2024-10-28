export interface IMainInfo {
    name: string,
    description: string,
    phone: string,
    email: string,
    logoSmall: string
    logoText: string
    logoHorizontal: string,
    logoVertical: string,
}

export interface ISocialMedia {
    vk?: string,
    telegram?: string,
    instagram?: string,
}

export interface INavLink {
    id: number,
    name: string,
    anchorLink?: boolean,
    expanded?: boolean,
    links?: { id: number; name: string; href: string }[];
    href: string
}

export interface Activity {
    title: string;
    description: string;
    href: string;
    icons: { src: string, position: (number | string)[], size: number, rotate: number, opacity?: number, noMd?:boolean }[];
}