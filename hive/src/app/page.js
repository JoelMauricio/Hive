"use client"
import Card from '@/app/components/general/Card';
import Image from 'next/image';
import InputBar from './components/general/CustomInput';
import { placeholder } from '@/app/constants';
import NewPost from './components/general/NewPostCreator';
import supabase from './supabaseClient';
import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(false)


  async function getPosts() {
    if (posts?.length < 1) {
      const { data, error } = await supabase.from("tblpost").select("*,tbluser!tblpost_author_fkey(*)")
      console.log(data)
      setPosts(data)
      setLoading(false)
      if (error) {
        console.error(error);
      }
    }
  }
  useEffect(() => {
    setLoading(true)
    getPosts();
  }, [])


  return (<>
    <h1 className='font-bold text-[1.2rem] px-2'>What&apos;s new?</h1>
    <NewPost />
    <div className='overflow-y-auto'>
      {
        isLoading ? <p className='m-auto'>Loading...</p> : !posts ? <p>No profile data</p> :

          posts.map((post, index) => (
            <Card key={index} UserId={post.author} PostId={post.post_id} User={post.tbluser.display_name} Message={post.content} HasImage={post.hasphoto} ImageSrc={post.photo} Username={post.tbluser.username} unclickable={false} />
          ))
      }
    </div>
  </>
  )
}
