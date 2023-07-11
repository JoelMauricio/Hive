"use client"
import Card from '@/app/components/general/Card';
import Image from 'next/image';
import InputBar from './components/general/CustomInput';
import { placeholder } from '@/app/constants';
import NewPost from './components/general/NewPostCreator';
import supabase from './supabaseClient';
import { useEffect, useState, useRef } from 'react';
import { debounce } from 'lodash';

export default function Home() {
  const PAGE_COUNT = 5
  const containerRef = useRef(null)
  const [offset, setOffset] = useState(1)
  const [isInView, setIsInView] = useState(false)
  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(false)

  const handleScroll = (container) => {
    if (containerRef.current && typeof window !== 'undefined') {
      const container = containerRef.current
      const { bottom } = container.getBoundingClientRect()
      const { innerHeight } = window
      setIsInView((prev) => bottom <= innerHeight)
    }
  }

  async function getPosts() {
    if (posts?.length < 1) {
      const { data, error } = await supabase.from("vw_post_info").select("*").limit(4)
      setPosts(data)
      setLoading(false)
      if (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    const handleDebouncedScroll = debounce(() => !isLast && handleScroll(), 200)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isInView) {
      loadMorePosts(offset)
    }
  }, [isInView])

  useEffect(() => {
    setLoading(true)
    getPosts();
  }, [])

  const loadMorePosts = async (offset) => {
    setOffset((prev) => prev + 1)
    const { data: newPosts } = await fetchPosts(offset, PAGE_COUNT)
    setPosts((...prevPosts) => [...prevPosts, newPosts])
  }

  const fetchPosts = async (offset) => {
    const from = offset * PAGE_COUNT
    const to = from + PAGE_COUNT - 1

    const { data } = await supabase
      .from('vw_post_info')
      .select('*')
      .range(from, to)

    return data
  }


  return (<>
    <h1 className='font-bold text-[1.2rem] px-2'>What&apos;s new?</h1>
    <NewPost />
    <div className='overflow-y-auto h-fit' ref={containerRef}>
      {
        isLoading ? <p className='m-auto'>Loading...</p> : !posts ? <p>No profile data</p> :

          posts.map((post, index) => (
            <Card key={index} UserId={post.author} PostId={post.post_id} User={post.display_name} Message={post.content} HasImage={post.hasphoto} ImageSrc={post.photo} Username={post.username} unclickable={false} />
          ))
      }
    </div>
  </>
  )
}
