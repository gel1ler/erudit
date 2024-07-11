import { VKAttachment, VKImage } from "vk-types"

export type TSetBool = (value: boolean) => void
export type TSetNumber = (value: number) => void

export type TCard = {
    title: string,
    text: string,
    img: string,
    link?: string,
}

export type VKAttachmentExp = {
    type: string,
    photo?: VKImage,
    video?: any
}

export type TPost = {
    text: string,
    attachments: [VKAttachmentExp],
    views: { count: number },
    date: number,
    likes: { count: number },
}