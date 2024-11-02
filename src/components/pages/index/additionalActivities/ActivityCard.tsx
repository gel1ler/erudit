//-------
// 111111
//-------

// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const ActivityCard = ({ title }: { title: string }) => {
//   return (
//     <Box className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300">
//       <Typography variant="h6" className="text-gray-800 font-semibold">
//         {title}
//       </Typography>
//     </Box>
//   );
// };

// export default ActivityCard;




//-------
//2222222
//-------

// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import SchoolIcon from '@mui/icons-material/School';
// import ChildCareIcon from '@mui/icons-material/ChildCare';
// import GroupIcon from '@mui/icons-material/Group';
// import CakeIcon from '@mui/icons-material/Cake';

// const icons = {
//   'Подготовка к школе': <SchoolIcon />,
//   'Детский лагерь': <ChildCareIcon />,
//   'Кружки': <GroupIcon />,
//   'Проведение дней рождений': <CakeIcon />,
// };

// const ActivityCard = ({ title, description }) => {
//   return (
//     <Box className="bg-white shadowed rounded-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300">
//       <Box className="mb-4 text-4xl text-blue-500">
// {icons[title]}
//       </Box>
//       <Typography variant="h6" className="text-gray-800 font-semibold mb-2">
//         {title}
//       </Typography>
//       <Typography variant="body2" className="text-gray-600">
//         {description}
//       </Typography>
//     </Box>
//   );
// };

// export default ActivityCard;



//-------
//3333333
//-------

import React from 'react';
import { Box, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import GroupIcon from '@mui/icons-material/Group';
import CakeIcon from '@mui/icons-material/Cake';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';

const icons = {
  'Подготовка к школе': <SchoolIcon fontSize='large' />,
  'Детский лагерь': <ChildCareIcon fontSize='large' />,
  'Кружки': <GroupIcon fontSize='large' />,
  'Проведение дней рождений': <CakeIcon fontSize='large' />,
};

const ActivityCard = ({ title, description, href }: { title: string, description: string, href:string }) => {
  return (
    <Link href={href} className="relative group">
      <Box
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-lg cursor-pointer
     p-6 flex flex-col items-center justify-center text-center duration-200
     transition-all group-hover:blur-sm
     ">
        <Box className="mb-4 text-white">
          {icons[title as keyof typeof icons]}
        </Box>
        <Typography variant="h5" className="text-white font-semibold">
          {title}
        </Typography>
        <Typography className="text-white">
          {description}
        </Typography>
      </Box>
      <Box className='cursor-pointer absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity hover:opacity-100'>
        <Typography variant="h6" className="text-white">
          Подробнее
          <ArrowRightAltIcon />
        </Typography>
      </Box>
    </Link>
  );
};

export default ActivityCard;