import { ContactsButton, MoreBtn } from '@/components/UI/form/Buttons'
import { TCard } from '@/globalTypes'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'

const Card = ({ card, id }: { card: TCard, id: number }) => {
  const { title, schedule, age, description } = card

  const [isSchedule, setIsSchedule] = useState(false)

  return (
    <Box data-aos='fade-up' className='max-w-xs min-w-[340px] flex flex-col items-center overflow-hidden py-4 h-[650px]'>
      <Image
        src={`/groups/${title}.jpg`}
        fill
        alt='Фото группы'
        className='rounded-2xl w-full object-cover shadow bg-center opacity-50 -z-10'
      />
      <div className="w-full h-full">
        <div className={`grid grid-cols-2 w-[200%] h-full ${isSchedule ? '-translate-x-1/2' : ''} transition-transform duration-300`}>
          <div className="flex flex-col items-center justify-center gap-2 w-full px-4">
            <Typography variant='h3' textAlign='center' fontWeight='bold' mt={1}>
              {age}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Balmy, sans-serif',
                letterSpacing: 2,
                color: '#671b67',
              }}
              variant='h4' textAlign='center' mt={1}>
              {title}
            </Typography>
            <Typography variant='h6' textAlign='center' mt={1}>
              {description}
            </Typography>
          </div>
          <div className="flex flex-col gap-2 my-4 w-full px-4 justify-center">
            <Typography fontSize={40} mb={2} fontWeight='bold' textAlign='center'>
              Расписание
            </Typography>
            {schedule.map((group, i) =>
              <>
                <div key={i} className="flex justify-between items-center">
                  <div className=" flex items-center gap-2">
                    <Typography variant='h6' className="p-4 rounded-full bg-white">{group.day}</Typography>
                    <Typography variant='h6' className="">{group.time}</Typography>
                  </div>
                  <div className="flex flex-col gap-1 items-center w-32">
                    {group.subjects.map((subj, j) =>
                      <Typography fontWeight='bold' fontSize={18} key={j} textAlign='center'>{subj}</Typography>
                    )}
                  </div>
                </div>
                {i === group.subjects.length - 1 ? null : <hr key={i} className='opacity-50' />}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-1 items-center">
        <MoreBtn dark click={() => setIsSchedule(!isSchedule)} text={isSchedule ? 'Назад' : 'Расписание'} variant='contained' />
        <MoreBtn dark href={`/#contacts_anchor`} text='Записаться' />
      </div>
    </Box >
  )
}

export default Card