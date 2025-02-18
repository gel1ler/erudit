'use client'
import Title from '@/components/UI/text/Title';
import { Box, Button, CircularProgress, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { TPost } from '@/globalTypes';
import Post from '../../news/Post';
import Link from 'next/link';

const News = () => {
  const [posts, setPosts] = useState<[TPost] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/getPosts`);
        const data = await response.json();
        setPosts(data.items);
      } catch (error) {
        console.error('Failed to fetch posts', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container maxWidth='xl' sx={{ display: 'flex', flexDirection: 'column', gap: 20, mt: [10, 10, 10] }} id='news_anchor' className='anchor'>
      <Box className='w-full anchor flex flex-col items-center gap-4' id='about_anchor'>
        <Title>Новости</Title>
        <Box className='flex gap-4 items-center mb-4' data-aos='fade-up'>
          <Link href='/news'>
            <Button variant='outlined' color='secondary'>
              Все новости
            </Button>
          </Link>
          <a href='https://vk.com/smalleruditevkk'>
            <Typography>
              Перейти в группу ВК
            </Typography>
          </a>
        </Box>
        <Box className='flex flex-col xl:flex-row w-full gap-4 xl:justify-center items-center xl:items-start xl:h-[1000px] h-[3500px]' data-aos='fade-up'>
          {(loading || !posts?.length) ?
            <CircularProgress sx={{ color: '#CE02CF', mt: 10 }} />
            :
            posts.map(post =>
              <Post key={post.id} post={post} />
            )
          }
        </Box>

      </Box>
    </Container>
  );
};

export default News;