import { IColors, IFooterProps, IHeaderProps } from "./types";

export const colors: IColors = {
    primary: '#fff',
    secondary: '#e3e3e3',
    bg: '#efefef'
}

export const headerProps: IHeaderProps = {
    type: 'static',
    scrollHeight: 0.4,
    // fullwidth: true
}

export const footerProps: IFooterProps = {
    type: 'simple',
    logo: true
}