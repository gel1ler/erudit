import Title from '@/components/UI/text/Title';
import { Box, Typography } from '@mui/material';
import Item from './item';
import { activities } from '@/content/content'

const Activities = () => {
    return (
        <Box id='ECenter_anchor' className='-mt-[100px] pt-[100px] flex flex-col items-center'>
            <Typography textAlign='center' variant='subtitle2' className=' tracking-widest' color='darkgray' data-aos='fade-up'>
                ДЛЯ ШКОЛЬНИКОВ И ВЗРОСЛЫХ
            </Typography>
            <Title gradient>Эрудит центр</Title>
            <Box className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-4 p-4 rounded-lg max-w-2xl lg:max-w-7xl mx-auto mt-10">
                {activities.map((activity, index) => (
                    <Item key={index} activity={activity} index={index} />
                ))}
            </Box>
        </Box>
    );
};

export default Activities;