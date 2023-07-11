"use client"
import supabase from '@/app/supabaseClient';
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function CommentCard({ User, Message, UserId }) {
    const [avatar, setAvatar] = useState(
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=");
    async function getProfilePhoto() {
        const { data, error } = await supabase.storage.from("Profiles").list(`UserPhotos/${UserId}`)
        if (data[0]?.name == "avatar") {
            setAvatar(`https://nbeavztkonchgnujeqve.supabase.co/storage/v1/object/public/Profiles/UserPhotos/${UserId}/avatar`)
        }
        else {
            setAvatar("https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=")
        }
    }

    useEffect(() => {
        getProfilePhoto
    }, [])
    return (
        <div className='flex flex-row min-w-[90%] h-fit p-2 rounded-md bg-[rgba(102,102,102,1)]' >
            < div className='flex flex-col min-w-[10%] items-center' >
                <Image alt={`${User}'s photo`} src={avatar} className='w-[45px] h-[45px] bg-white rounded-full' width={500} height={500} />
                <span className='font-medium text-base'>{User}</span>
            </div >
            <div className='flex flex-col min-w-[90%] p-2 pr-4 gap-2'>
                <p className='text-justify text-[12px]'>{Message}</p>
            </div>
        </div >
    );
}