import React from 'react'
import Title from '../../UI/text/Title'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'

const Block = ({ title, text, className, color }: { title: string, text: string, className?: string, color?: string }) =>
    <Box className='flex flex-col items-center'>
        <Typography
            className={className}
            sx={{ width: 'fit-content' }}
            textAlign='center'
            variant='h2'
            fontWeight='bold'
            color={color}
        >
            {title}
        </Typography>
        <Typography variant='h6' textAlign='center'>
            {text}
        </Typography>
    </Box>

const Ratings = () => {
    return (
        <Container
            id='ratings_anchor'
            className='anchor'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                justifyContent: 'center'
            }}
        >
            <Title>Отзывы на Яндексе</Title>
            <div data-aos='fade-up' aria-haspopup="true" aria-expanded="false" className="business-awards-view__award mx-auto" aria-hidden="false" role="button" tabIndex={0}>
                <div className="business-awards-view__badge _yandex">
                    <span className="inline-image _loaded icon business-awards-view__bg-yandex" aria-hidden="true" role="button" tabIndex={-1} style={{ fontSize: 0, lineHeight: 0 }}><svg width="56" height="72" viewBox="0 0 56 72" xmlns="http://www.w3.org/2000/svg"><path d="M0 27.913C0 12.497 12.536 0 28 0s28 12.497 28 27.913v38.748c0 3.834-3.936 6.415-7.467 4.897l-19.741-8.483a2.005 2.005 0 0 0-1.584 0l-19.74 8.483C3.935 73.076 0 70.495 0 66.661V27.913z" fill="currentColor"></path></svg></span><span className="inline-image _loaded icon business-awards-view__badge-icon" aria-hidden="true" role="button" tabIndex={-1} style={{ fontSize: 0, lineHeight: 0 }}><svg width="40" height="24" viewBox="0 0 40 24" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="12" r="12" fill="#FC3F1D"></circle><path d="M21.885 19.5h2.616v-15h-3.808c-3.83 0-5.839 1.96-5.839 4.857 0 2.5 1.303 3.91 3.61 5.44l1.401.925-1.799-1.508-3.565 5.286h2.837l3.808-5.683-1.325-.88c-1.6-1.08-2.384-1.917-2.384-3.734 0-1.597 1.126-2.677 3.267-2.677h1.17V19.5h.011z" fill="#fff"></path></svg></span><div className="business-awards-view__badge-year">2023</div></div><div className="business-awards-view__content">
                </div>
                <div className="business-awards-view__badge _yandex -ml-12">
                    <span className="inline-image _loaded icon business-awards-view__bg-yandex" aria-hidden="true" role="button" tabIndex={-1} style={{ fontSize: 0, lineHeight: 0 }}><svg width="56" height="72" viewBox="0 0 56 72" xmlns="http://www.w3.org/2000/svg"><path d="M0 27.913C0 12.497 12.536 0 28 0s28 12.497 28 27.913v38.748c0 3.834-3.936 6.415-7.467 4.897l-19.741-8.483a2.005 2.005 0 0 0-1.584 0l-19.74 8.483C3.935 73.076 0 70.495 0 66.661V27.913z" fill="currentColor"></path></svg></span><span className="inline-image _loaded icon business-awards-view__badge-icon" aria-hidden="true" role="button" tabIndex={-1} style={{ fontSize: 0, lineHeight: 0 }}><svg width="40" height="24" viewBox="0 0 40 24" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="12" r="12" fill="#FC3F1D"></circle><path d="M21.885 19.5h2.616v-15h-3.808c-3.83 0-5.839 1.96-5.839 4.857 0 2.5 1.303 3.91 3.61 5.44l1.401.925-1.799-1.508-3.565 5.286h2.837l3.808-5.683-1.325-.88c-1.6-1.08-2.384-1.917-2.384-3.734 0-1.597 1.126-2.677 3.267-2.677h1.17V19.5h.011z" fill="#fff"></path></svg></span><div className="business-awards-view__badge-year">2024</div></div><div className="business-awards-view__content">
                    <div className="business-awards-view__title">Хорошее место</div><div className="business-awards-view__text">Любимые организации по оценкам и отзывам пользователей Яндекса</div></div></div>
            <Box className='w-full flex flex-col items-center'>
                <Box data-aos='fade-up' className='w-full overflow-hidden relative px-5'>
                    <iframe src="https://swdgts.ru/853f844aac3e9483877c23c574c3d9d6" width="100%" className='ratings-block' loading='lazy' />
                </Box>
                <Box data-aos='fade-up' className='flex flex-col md:flex-row justify-center mx-auto gap-16'>
                    <Block
                        title='200+'
                        text='Счастливых детей в год'
                        className='grad-text1'
                    />
                    <Block
                        title='450+'
                        text='Увлекательных занятий'
                        color='#af41da'
                    />
                    <Block
                        title='100%'
                        text='Довольных родителей'
                        className='grad-text2'
                    />
                </Box>
            </Box>
        </Container>
    )
}

export default Ratings