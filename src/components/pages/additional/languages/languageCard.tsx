'use client'
import { MoreBtn } from "@/components/UI/form/Buttons"
import { Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { SetStateAction, useState } from "react"

const LanguageCard = ({ language, setSelected }: { language: { image: string, name: string }, setSelected: React.Dispatch<SetStateAction<string | undefined>> }) => {
    const [slided, setSlided] = useState(false)

    return (
        <div className="group aspect-video rounded-lg relative overflow-hidden cursor-pointer grid grid-cols-1">
            <Image
                fill
                src={language.image}
                alt={language.name}
                className='w-full h-full top-0 left-0 object-cover -z-10 opacity-20 group-hover:opacity-35 transition-opacity duration-300'
            />
            <div className={`grid grid-cols-2 w-[200%] ${slided ? '-translate-x-1/2' : ''} transition-transform duration-300`}>
                <div className="flex items-center justify-center flex-col w-full">
                    <Typography gutterBottom variant="h4" textAlign='center' fontWeight={600}>
                        {language.name}
                    </Typography>
                    {/* <MoreBtn dark click={() => setSlided(!slided)} text='Расписание' /> */}
                    <Link href='#contacts_anchor'>
                        <MoreBtn dark click={() => setSelected(language.name)} text='Записаться' />
                    </Link>
                </div>
                {/* <div className="flex items-center justify-center flex-col w-full">
                    <Typography textAlign='center'>
                        Понедельник-Четверг
                    </Typography>
                    <Typography gutterBottom variant="h5" textAlign='center'>
                        С 9:00 до 19:00
                    </Typography>
                    <MoreBtn dark click={() => setSlided(!slided)} text='Назад' />
                </div> */}
            </div>
        </div>
    )
}

export default LanguageCard