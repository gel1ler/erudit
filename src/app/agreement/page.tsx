import type { Metadata } from 'next'
import { Box, Typography } from '@mui/material'
import Loader from '../../components/layout/loader'
import Gallery from '@/components/pages/Gallery'
import Title from '@/components/UI/text/Title'
import Contacts from '@/components/pages/Contacts/Contacts'

export const metadata: Metadata = {
    title: 'Маленький Эрудит - Пользовательское Соглашение',
    description: 'Детский центр "Маленький Эрудит" - это свой маленький мир для каждого ребенка, где его искренне любят, уважают и всегда ждут!',
}

export default function Home() {
    return (
        <>
            <Loader />
            <Box className='relative flex flex-col gap-4 my-40 max-w-6xl items-center mx-auto'>
                <Title>Пользовательское Соглашение</Title>
                <Typography textAlign='center'>
                    Настоящее Пользовательское Соглашение (Далее Соглашение) регулирует отношения между ИП Васильева Наталья Дмитриевна (далее Детский центр Маленький Эрудит или Администрация) с одной стороны и пользователем сайта с другой.
                    Сайт Детский центр Маленький Эрудит не является средством массовой информации.<br />

                    Используя сайт, Вы соглашаетесь с условиями данного соглашения.<br />
                    Если Вы не согласны с условиями данного соглашения, не используйте сайт Детский центр Маленький Эрудит!<br />
                    <Typography variant='h4'  mt={2}>
                        Права и обязанности сторон
                    </Typography>
                    <b>Пользователь имеет право:</b><br />
                    - осуществлять поиск информации на сайте<br />
                    - получать информацию на сайте<br />
                    - использовать информацию сайта в личных некоммерческих целях<br />

                    <b>Администрация имеет право:</b><br />
                    - по своему усмотрению и необходимости создавать, изменять, отменять правила<br />
                    - ограничивать доступ к любой информации на сайте<br />

                    <b>Пользователь обязуется:</b><br />
                    - не нарушать работоспособность сайта<br />
                    - не использовать скрипты (программы) для автоматизированного сбора информации и/или взаимодействия с Сайтом и его Сервисами<br />

                    <b>Администрация обязуется:</b><br />
                    - поддерживать работоспособность сайта за исключением случаев, когда это невозможно по независящим от Администрации причинам.
                    <Typography variant='h4'  mt={2}>
                        Ответственность сторон
                    </Typography>
                    - администрация не несет никакой ответственности за услуги, предоставляемые третьими лицами<br />
                    - в случае возникновения форс-мажорной ситуации (боевые действия, чрезвычайное положение, стихийное бедствие и т. д.) Администрация не гарантирует сохранность информации, размещённой Пользователем, а также бесперебойную работу информационного ресурса<br />
                    <Typography variant='h4'  mt={2}>
                        Условия действия Соглашения
                    </Typography>
                    Данное Соглашение вступает в силу при любом использовании данного сайта.<br />
                    Соглашение перестает действовать при появлении его новой версии.<br />
                    Администрация оставляет за собой право в одностороннем порядке изменять данное соглашение по своему усмотрению.<br />
                    Администрация не оповещает пользователей об изменении в Соглашении.<br />
                </Typography>
            </Box>
        </>
    )
}