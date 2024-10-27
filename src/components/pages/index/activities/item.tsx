import { Box } from '@mui/material'
import React from 'react'
import { Activity } from './activities'
import Image from 'next/image'

const Item = ({ index, activity }: { index: Number, activity: Activity }) => {
    return (
        <Box
            className={`bg-gray-100 p-4 rounded-lg ${index === 0 || index === 3 ? 'md:col-span-2' : ''} flex items-start gap-4`}
        >
            <Image
                src='/groups/1.jpeg'
                width={200}
                height={500}
                alt='Image'
                className='object-cover ascpe rounded-lg'
            />
            <div>
                <h2 className="text-xl font-bold mb-2">{activity.title}</h2>
                <p>{activity.description}</p>
            </div>
        </Box>
    )
}

export default Item