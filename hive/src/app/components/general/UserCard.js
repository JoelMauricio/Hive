"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useState } from 'react';



export default function UserCard({ User, UserId }) {
    const router = useRouter();
    const [followed, setFollowed] = useState("false");
    function openUser() { router.push(`/profile/${UserId}`) }
    function followUser() {
        setFollowed(!followed);
    }

    return (
        <div className='flex min-w-[100%] min-h-[65px] justify-between p-2 rounded-md border border-[rgba(102,102,102,1)] hover:bg-[rgba(28,28,28,1)]' >
            < div className='flex w-full items-center justify-start gap-4' onClick={openUser}>
                <Image alt={`${User}'s photo`} src={"https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="} className='w-[40px] h-[40px] bg-white rounded-full' width={500} height={500} />
                <span className='font-medium text-2xl'>{User}</span>
            </div >
            <div className='flex w-fit items-center justify-end gap-4' >
                <button className='focus:outline-none' onClick={followUser}><span className='text-[#FF9858] text-sm px-2'>{followed ? "Follow" : "Unfollow"}</span></button>
            </div>
        </div >
    );
}