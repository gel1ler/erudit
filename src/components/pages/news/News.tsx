// components/NewsBlock.js
'use client'
import Title from '@/components/UI/text/Title';
import { Box, Button, CircularProgress, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import Post from './Post';
import { TPost } from '@/globalTypes';

const News = () => {
  const [posts, setPosts] = useState<[TPost] | []>([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(6)
  let bias = 3

  const theme = useTheme()
  const isLg = useMediaQuery(theme.breakpoints.up('lg'))

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/getPosts?count=${offset}`);
        const data = await response.json();
        setPosts(data.items);
      } catch (error) {
        console.error('Failed to fetch posts', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [offset]);

  const addPosts = async () => {
    try {
      const response = await fetch(`/api/getPosts?count=${bias}&offset=${offset}`);
      setOffset(offset + bias)
      const data = await response.json();
      setPosts((prevPosts) => {
        const newPosts = data.items as TPost[];
        return [...prevPosts, ...newPosts] as [TPost] | [];
      })
    } catch (error) {
      console.error('Failed to fetch additional posts', error);
    }
  }

  let rows = Math.ceil(posts.length / 3)

  return (
    <Container maxWidth='xl' sx={{ display: 'flex', flexDirection: 'column', gap: 20 }} id='news_anchor' className='anchor'>
      <Box className='w-full anchor flex flex-col items-center gap-4' id='about_anchor'>
        <Title h1>Новости</Title>
        <a href='https://vk.com/smalleruditevkk' data-aos='fade-up'>
          <Typography>
            Перейти в группу ВК
          </Typography>
        </a>
        {
          (loading || !posts?.length) ?
            <CircularProgress sx={{ color: '#CE02CF', mt: 10 }} />
            :
            <>
              <Box className='flex flex-col xl:flex-row w-full gap-4 xl:justify-center items-center xl:items-start' maxWidth={1500} data-aos='fade-up'>
                {isLg ? Array(3).fill(0).map((_, index) => {

                  return (
                    <Box key={index} className='w-full flex flex-col gap-4 items-center'>
                      {Array(rows).fill(0).map((_, postIndex) =>
                        <Post key={postIndex} post={posts[index + postIndex * 3]} />
                      )}
                    </Box>
                  )
                })
                  :
                  posts.map((post) => <Post key={post.id} post={post} fw />)
                }
              </Box>
              <Button sx={{ color: '#303030' }} onClick={addPosts}>
                загрузить еще
              </Button>
            </>
        }
      </Box>
    </Container>
  );
};

export default News;