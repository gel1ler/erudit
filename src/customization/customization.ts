import { IColors, IFooterProps, IHeaderProps } from "./types";

export const colors: IColors = {
    primary: '#fff',
    secondary: '#e3e3e3',
    bg: '#efefef',
    // additional: '#678650'
}

export const headerProps: IHeaderProps = {
    type: 'static',
    scrollHeight: 0.4,
    remHeight: 3,
    topHeader: true,
    withShadow: true,
    menu: true,
    links: true,
}




export const footerProps: IFooterProps = {
    type: 'simple',
    logo: true
}