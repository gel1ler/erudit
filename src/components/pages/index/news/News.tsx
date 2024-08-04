// components/NewsBlock.js
'use client'
import Title from '@/components/UI/text/Title';
import { Box, Button, Container, Typography } from '@mui/material';
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

  if (loading || !posts?.length) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth='xl' sx={{ display: 'flex', flexDirection: 'column', gap: 20, mt: [10, 10, 10] }} id='news_anchor' className='anchor'>
      <Box className='w-full anchor flex flex-col items-center gap-4' id='about_anchor'>
        <Title>Новости</Title>
        <Box className='flex flex-col xl:flex-row w-full gap-4 xl:justify-center items-center xl:items-start' data-aos='fade-up'>
          {posts.map(post =>
            <Post key={post.id} post={post} />
          )}
        </Box>
        <Box className='flex gap-4 items-center'>
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
      </Box>
    </Container>
  );
};

export default News;