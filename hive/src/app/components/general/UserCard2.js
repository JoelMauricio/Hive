"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import supabase from '@/app/supabaseClient'




export default function UserCard2({ User, UserId, Username, isFollowed = false }) {
    const router = useRouter();
    const [followed, setFollowed] = useState(isFollowed);
    const [avatar, setAvatar] = useState();

    function openUser() { router.push(`/profile/${UserId}`) }
    async function followUser() {
        setFollowed(!followed);
        var user_id = 2
        if (followed) {

        }
        else {
            const { data, error } = await supabase
                .from('tblfollow')
                .insert([
                    { follower: user_id, followed: UserId },
                ])
                .select()

        }
    }

    async function getUserPhoto() {
        const { data, error } = await supabase.storage.from("Profiles").list(`UserPhotos/${UserId}`)
        if (data[0]?.name == "avatar") {
            setAvatar(`https://nbeavztkonchgnujeqve.supabase.co/storage/v1/object/public/Profiles/UserPhotos/${UserId}/avatar`)
        }
        else {
            setAvatar("https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=")
        }

    }

    useEffect(() => {
        getUserPhoto()
    }, [])


    return (
        <div className='flex flex-col min-w-[100%] min-h-[200px] justify-between p-2 rounded-md border border-[rgba(102,102,102,1)] hover:bg-[rgba(28,28,28,1)]' >
            < div className='flex w-full h-4/5 items-center justify-start gap-4' onClick={openUser}>
                <Image alt={`${User}'s photo`} src={avatar} className='w-full h-full bg-white rounded-t-md' width={500} height={500} />
            </div >
            <div className='flex w-full items-center justify-between gap-4' >
                <div className='flex flex-col'>
                    <span className='font-medium text-xl'>{User}</span>
                    <span className='font-medium text-sm'>{Username}</span>
                </div>
                <button className='focus:outline-none' onClick={followUser}><span className='text-[#FF9858] text-sm px-2'>{followed ? "Unfollow" : "Follow"}</span></button>
            </div>
        </div >
    );
}