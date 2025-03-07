'use client'
import React, { useState } from 'react'
import Title from '../../UI/text/Title'
import { animated, useSpring } from 'react-spring'
import { Box, Container, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const CollapsedComponent = ({ title, text }: { title: string, text: string }) => {
    const [isExpanded, setExpanded] = useState(false)

    return (
        <Box
            data-aos='fade-up'
            className='bg-[#FBFBFB] border rounded-lg p-4 cursor-pointer mt-6'
            onClick={() => setExpanded(!isExpanded)}
        >
            <Box className='flex items-center w-full justify-between'>
                <Typography variant='h6'>
                    {title}
                </Typography>
                <Box
                    className='transition-transform'
                    sx={{
                        transform: `rotate(${isExpanded ? '0' : '-180'}deg)`,
                    }}
                >
                    <KeyboardArrowDownIcon />
                </Box>
            </Box>
            <Box
                className='transition-all overflow-hidden duration-500 pt-1'
                sx={{
                    maxHeight: isExpanded ? ['400px', '300px', '200px','100px'] : 0,
                    transformOrigin: 'top'
                }}>
                <p>{text}</p>
            </Box>
        </Box>
    );
};


const FAQ = () => {
    return (
        <Container className='anchor' id='faq_anchor'>
            <Title sx={{ mb: 4 }}>Часто задаваемые вопросы</Title>
            <CollapsedComponent
                title='Мой ребенок "домашний", трудно привыкает к новой  обстановке. Можно ли присутствовать с ним на занятии?'
                text='К нам приходят разные дети, и адаптация проходит у всех по разному. Если ребенок плачет, не отпускает маму, то ее присутствие на занятиях необходимо. Предаварительно мы беседуем с мамой, объясняя ей, как вести себя на занятиях. У нас есть своя разработаная методика по адаптации ребенка к детскому центру и коллективу. Каждый малыш индивидуален и поэтому здесь важен особый подход.'
            />
            <CollapsedComponent
                title='Можно ли записать ребенка в группу старше по возрасту, если он развивается быстрее своих сверстников?'
                text='Да, можно. Но оценить развитие ребенка и уровень его знаний могут только специалисты. Детей с опережающим развитием сразу заметно, они выделяются среди своих сверстников. Но, главное, не «перезагрузить» ребенка и учесть его индивидуальные особенности.'
            />
            <CollapsedComponent
                title='Проводите ли вы открытые занятия?'
                text='Обязательно. Мы проводит их один раз в октябре месяце. Расписание открытых занятий заранее вывешивается в родительском уголке.  От каждый семьи присутствует один человек. Открытые занятия позволяют Вам оценить профессиональный уровень педагогов и правильность в выборе детского центра.'
            />
            <CollapsedComponent
                title='Сколько человек в группе?'
                text='В группе по 10 детей. Прежде всего нас волнует результат, а такое количество детей обеспечивает хорошее усвоение знаний и возможность уделить внимание каждому ребенку.'
            />
            <CollapsedComponent
                title='Можно ли попасть в детский центр в течении учебного года? '
                text='Да, конечно. Наше обучение основано на постоянном повторении пройденного материала и индивидуальной работе с детьми.'
            />
            <CollapsedComponent
                title='Как записаться в Детский центр "Маленький Эрудит"?'
                text='Достаточно сделать звонок по телефону 8 (916) 796-98-09. Запись детей начинается с апреля месяца.Обычно, к концу августа, группы сформированы, а так же составлен расписание по обучению.Мы учитываем Ваши пожелания по времени и дням недели. В начале августа деректор детского центра звонит Вам, и сообщает дату родительского собрания в конце августа. Ваше присутствие на собрании обязательно для зачисления в «Маленький эрудит».'
            />
        </Container>
    )
}

export default FAQ