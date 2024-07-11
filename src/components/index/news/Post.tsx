import { TPost, VKAttachmentExp } from '@/globalTypes'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const Attachment = ({ attachment }: { attachment: VKAttachmentExp }) => {
    switch (attachment.type) {
        case 'photo':
            if (!attachment.photo) return
            return <Image
                className=' rounded-lg mx-auto'
                src={attachment.photo.sizes[3].url}
                width={attachment.photo.sizes[3].width}
                height={attachment.photo.sizes[3].height}
                alt='post'
            />
        case 'video':
            if (!attachment.video) return
            const videoUrl = `https://vk.com/video_ext.php?oid=${attachment.video.owner_id}&id=${attachment.video.id}&access_key=${attachment.video.access_key}`

            return <iframe
                className='mx-auto min-h-96'
                src={videoUrl}
                width='100%'
                height={attachment.video.first_frame[0].height + 'px'}
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            />
        default:
            return null
    }
}

const Post = ({ post }: { post: TPost }) => {
    let date = new Date(post.date * 1000);

    let day = date.getDate().toString().padStart(2, '0');
    let month = date.toLocaleString('default', { month: '2-digit' });
    let hours = date.getHours();
    let minutes: string | number = date.getMinutes();

    minutes = minutes < 10 ? '0' + minutes : minutes;

    let formattedDate = `${day}.${month} в ${hours}:${minutes}`;

    return (
        <Box
            className='rounded-lg bg-slate-100 p-4 w-full flex flex-col gap-2 z-10 h-fit max-h-[80vh]'
            sx={{ boxShadow: '0 0 5px 2px rgba(0,0,0, .15)' }}
        >
            <Box className='flex gap-2'>
                <Image
                    src='/logo/small-logo.jpg'
                    className='rounded-full object-contain w-10 h-10'
                    width={40}
                    height={40}
                    alt='Логотип'
                />
                <Box>
                    <a target='_blank' href="https://vk.com/smalleruditevkk">
                        <Typography
                            color='#447bba'
                            variant='body2'
                            sx={{
                                ":hover": {
                                    textDecoration: "underline"
                                }
                            }}
                        >Детский центр &quot;Маленький Эрудит&quot; г. Жуковский</Typography>
                    </a>
                    <Typography variant='caption'>{formattedDate}</Typography>
                </Box>
            </Box>
            <Typography>{post.text}</Typography>
            <Attachment attachment={post.attachments[0]} />
            <Box className='flex justify-between items-center px-1 mt-1'>
                <Typography color='gray' variant='caption'><FavoriteBorderIcon /> {post.likes.count}</Typography>
                <Typography color='gray' variant='caption'><VisibilityOutlinedIcon /> {post.views.count}</Typography>
            </Box>
        </Box>

    )
}

export default Post