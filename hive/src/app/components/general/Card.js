"use client"
import Image from 'next/image'
import ChatIcon from "@/app/icons/ChatIcon"
import IconHeart from '@/app/icons/Like';
import IconBookmark from '@/app/icons/save';

export default function Card({ User, Message }) {
    return (
        <div className='flex flex-col min-w-[100%] min-h-[100px] rounded-xl p-2 shadow-inner shadow-current'>
            < div className='flex '>
                < div className='min-w-[10%] items-center mx-auto' >
                    <Image className='w-[50px] h-[50px] bg-red-200 rounded-full self-center' />
                </div >
                <div className='flex flex-col min-w-[90%]'>
                    <span className='font-medium text-3xl'>{User}</span>
                    <p>{Message}</p>
                </div>
            </div >
            <div className='flex w-[100%] justify-end gap-2'>
                {/* buttons for interaction */}
                <div className='flex gap-1'><span>1000</span><ChatIcon /></div>
                <div className='flex gap-1'><span>1000</span><IconHeart /></div>
                <div className='flex gap-1'><IconBookmark /></div>
            </div>
        </div >
    );
}