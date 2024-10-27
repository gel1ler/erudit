import Title from '@/components/UI/text/Title';
import { Box } from '@mui/material';
import Item from './item';

export interface Activity {
    title: string;
    description: string;
}

interface AdditionalActivitiesProps {
    activities: Activity[];
}

const activities: Activity[] = [
    {
        title: 'Активность 1',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus modi laudantium beatae nemo. Et, nulla? Sit non voluptatem corrupti, minus officia, nihil fugiat voluptate quidem odio iusto atque aperiam reiciendis?',
    },
    {
        title: 'Активность 2',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus modi laudantium beatae nemo. Et, nulla? Sit non voluptatem corrupti, minus officia, nihil fugiat voluptate quidem odio iusto atque aperiam reiciendis?',
    },
    {
        title: 'Активность 3',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus modi laudantium beatae nemo. Et, nulla? Sit non voluptatem corrupti, minus officia, nihil fugiat voluptate quidem odio iusto atque aperiam reiciendis?',
    },
    {
        title: 'Активность 4',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus modi laudantium beatae nemo. Et, nulla? Sit non voluptatem corrupti, minus officia, nihil fugiat voluptate quidem odio iusto atque aperiam reiciendis?',
    },
]

const Activities = () => {
    return (
        <Box>
            <Title>Дополнительно</Title>
            <Box className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg shadow-md">
                {activities.map((activity, index) => (
                    <Item key={index} activity={activity} index={index} />
                ))}
            </Box>
        </Box>
    );
};

export default Activities;