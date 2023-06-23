"use client"
import Image from 'next/image'
import ChatIcon from "@/app/icons/ChatIcon"
import IconHeart from '@/app/icons/Like';
import IconBookmark from '@/app/icons/save';
import { useState } from 'react';
import IconBookmarkFill from '@/app/icons/Saved';
import IconHeartFill from '@/app/icons/LikeFill';

export default function Card({ User, Message }) {
    const [likeState, setLikeState] = useState(false)
    const [saveState, setSaveState] = useState(false)
    const [commentState, setCommentState] = useState(false)


    function likePost() { setLikeState(!likeState) }
    function savePost() { setSaveState(!saveState) }
    function openComments() { setCommentState(!commentState) }

    return (
        <div className='flex flex-col min-w-[100%] min-h-[100px] p-2 shadow-current' style={{ "boxShadow": " 0px 2px 4px 0px" }} >
            < div className='flex'>
                < div className='min-w-[10%]' >
                    <Image className='w-[50px] h-[50px] bg-white rounded-full mx-auto mt-2 ' />
                </div >
                <div className='flex flex-col min-w-[90%] p-2 pr-4'>
                    <span className='font-medium text-2xl'>{User}</span>
                    <p className='text-justify text-[12px]'>{Message}</p>
                </div>
            </div >
            <div className='flex w-[100%] justify-end gap-4 p-2 align-middle'>
                {/* buttons for interaction */}
                <div className='flex gap-2'><span>1000</span><button className='focus:outline-none' onClick={openComments}><ChatIcon className="h-[20px] w-[20px]" /></button></div>
                <div className='flex gap-2'><span>1000</span><button className='focus:outline-none' onClick={likePost}>
                    {likeState === false ? <IconHeart className="h-[20px] w-[20px]" /> : <IconHeartFill className="h-[20px] w-[20px] stroke-white" />}
                </button></div>
                <button className='focus:outline-none' onClick={savePost}>
                    {saveState === false ? <IconBookmark className="h-[20px] w-[20px]" /> : <IconBookmarkFill className="h-[20px] w-[20px]" />}
                </button>
            </div>
        </div >
    );
}