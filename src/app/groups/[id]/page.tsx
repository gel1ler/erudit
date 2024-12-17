import Loader from '@/components/layout/loader'
import Contacts from '@/components/pages/Contacts/Contacts'
import { EnrollButton } from '@/components/UI/form/Buttons'
import Title from '@/components/UI/text/Title'
import { groupsData } from '@/content/content'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const numid = parseInt(id, 10);
    return {
        title: "Подготовка к школе - группа " + groupsData[numid].title + ' ' + groupsData[numid].age,
    }
}

const Group = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const numid = parseInt(id, 10);
    const group = groupsData[numid]
    return (
        <>
            <Loader />
            <Box className='relative flex flex-col gap-4 min-h-screen px-4 items-center justify-center'>
                {/* <div className="absolute w-[90vw] h-[90vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100px] overflow-hidden">
                    <Image
                        src={`/groups/${group.title}.jpg`}
                        fill
                        alt='фото группы'
                        className='object-cover h-screen w-screen -z-10 flex flex-col'
                    />
                </div> */}
                <Image
                    src={`/groups/${group.title}.jpg`}
                    fill
                    alt='фото группы'
                    className='object-cover h-screen w-screen -z-10 flex flex-col opacity-50'
                />
                <Title>{group.title} - {group.age}</Title>
                <Typography className=' max-w-screen-md' textAlign='center' variant='h6'>
                    {group.description}
                </Typography>
                <EnrollButton dark />
            </Box>
            <div className="flex flex-col gap-2 my-20 w-full px-4 justify-center max-w-lg mx-auto">
                <Typography fontSize={40} mb={2} fontWeight='bold' textAlign='center'>
                    Расписание
                </Typography>
                {group.schedule.map((group, i) =>
                    <div key={i} className='flex flex-col gap-8'>
                        <div className="flex justify-between items-center">
                            <div className=" flex items-center gap-4">
                                <Typography
                                    variant='h6'
                                    className="aspect-square w-16 p-4 rounded-full bg-slate-200 flex items-center justify-center"
                                >
                                    {group.day}
                                </Typography>
                                <Typography variant='h6' className="">{group.time}</Typography>
                            </div>
                            <div className="flex flex-col gap-4 items-center w-32">
                                {group.subjects.map((subj, j) =>
                                    <Typography fontWeight='bold' fontSize={18} key={j} textAlign='center'>{subj}</Typography>
                                )}
                            </div>
                        </div>
                        {i === group.subjects.length - 1 ? null : <hr className='opacity' />}
                    </div>
                )}
            </div>
            <Contacts noAos pageTitle={group.title} />
        </>
    )
}

export default Group