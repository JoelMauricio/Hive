"use client"
import Card from '@/app/components/general/Card';
import Image from 'next/image';
import InputBar from './components/general/CustomInput';
import { placeholder } from '@/app/constants';
import NewPost from './components/general/NewPostCreator';
import supabase from './supabaseClient';
import { useEffect, useState, useRef } from 'react';
import { concat, debounce, round } from 'lodash';

export default function Home() {
  const [PAGE_COUNT, setPageCount] = useState(1)
  const containerRef = useRef(null)
  const [offset, setOffset] = useState(1)
  const [isInView, setIsInView] = useState(false)
  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(false)

  const handleScroll = (height, offsetHght, current) => {
    if (containerRef.current) {
      let scrollbarHeight = height - offsetHght
      setIsInView((prev) => current == scrollbarHeight)
    }
  }

  async function getPosts() {
    const { count, error } = await supabase.from("vw_post_info").select("*", { count: "exact" })
    setPageCount(Math.ceil(count / 5))
    if (posts?.length < 1) {
      const { data, error } = await supabase.from("vw_post_info").select("*").limit(5)
      setPosts(data)
      setLoading(false)
      if (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    const handleDebouncedScroll = debounce(() => !isLast && handleScroll(), 200)
    containerRef.current?.addEventListener('scroll', (e) => { handleScroll(e.target.scrollHeight, e.target.offsetHeight, e.target.scrollTop) })
    return () => {
      containerRef.current?.removeEventListener('scroll', (e) => { handleScroll(e.target.scrollHeight, e.target.offsetHeight) })
    }
  }, [])

  useEffect(() => {
    console.log(PAGE_COUNT)

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
    try {

      const { data: newPosts } = await fetchPosts(offset, PAGE_COUNT)
    }
    catch (error) {
    }
  }

  const fetchPosts = async (offset) => {
    const from = posts.length
    const to = PAGE_COUNT * 5

    const { data, error } = await supabase
      .from('vw_post_info')
      .select('*')
      .range(from, to)
    if (error) {
      return
    }
    setPosts((posts) => concat(posts, data))
  }


  return (<>
    <h1 className='font-bold text-[1.2rem] px-2'>What&apos;s new?</h1>
    <NewPost />
    <div className='overflow-y-auto h-full' ref={containerRef} >
      {
        isLoading ? <p className='m-auto'>Loading...</p> : !posts ? <p>No profile data</p> :

          posts?.map((post, index) => (
            <Card key={index} UserId={post?.author} PostId={post?.post_id} User={post?.display_name} Message={post?.content} HasImage={post?.hasphoto} ImageSrc={post?.photo} Username={post?.username} unclickable={false} />
          ))
      }
    </div>
  </>
  )
}
