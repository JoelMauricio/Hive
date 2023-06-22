"use client"
import Image from 'next/image'
import ChatIcon from "@/app/icons/ChatIcon"
import IconHeart from '@/app/icons/Like';
import IconBookmark from '@/app/icons/save';

export default function Card({ User, Message }) {
    return (
        <div className='flex flex-col min-w-[100%] min-h-[100px] p-2 shadow-current' style={{ "box-shadow": " 0px 2px 4px 0px;" }} >
            < div className='flex'>
                < div className='min-w-[10%]' >
                    <Image className='w-[50px] h-[50px] bg-white rounded-full mx-auto mt-2 ' />
                </div >
                <div className='flex flex-col min-w-[90%] p-2 pr-4'>
                    <span className='font-medium text-3xl'>{User}</span>
                    <p className='text-justify'>{Message}</p>
                </div>
            </div >
            <div className='flex w-[100%] justify-end gap-4 p-2'>
                {/* buttons for interaction */}
                <div className='flex gap-2'><span>1000</span><ChatIcon className="h-[25px] w-[25px]" /></div>
                <div className='flex gap-2'><span>1000</span><IconHeart className="h-[25px] w-[25px]" /></div>
                <div><IconBookmark className="h-[25px] w-[25px]" /></div>
            </div>
        </div >
    );
}