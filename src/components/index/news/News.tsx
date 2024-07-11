// components/NewsBlock.js
'use client'
import Title from '@/components/UI/text/Title';
import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Post from './Post';
import { TPost } from '@/globalTypes';

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth='xl' sx={{ display: 'flex', flexDirection: 'column', gap: 20 }} id='news_anchor' className='anchor'>
      <Box className='w-full anchor flex flex-col items-center gap-4' id='about_anchor'>
        <Title>Новости</Title>
        <Box className='flex w-full gap-4' data-aos='fade-up'>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </Box>
        <a href='https://vk.com/smalleruditevkk'>
          <Typography>
            Перейти в группу ВК
          </Typography>
        </a>

      </Box>
    </Container>
  );
};

export default News;