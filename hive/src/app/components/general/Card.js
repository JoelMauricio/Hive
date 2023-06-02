"use client"
import Image from 'next/image'

export default function Card({ User, Message }) {
    return (
        <div className='flex min-w-[100%] min-h-[150px] bg-slate-500 rounded-xl p-2 shadow-md'>
            <div className='min-w-[10%] items-center mx-auto'>
                <Image className='w-[5rem] h-[5rem] bg-red-200 rounded-full self-center' />
            </div>
            <div className='flex flex-col min-w-[90%]'>
                <span className='font-medium text-3xl'>{User}</span>
                <p>{Message}</p>
            </div>
        </div>
    );
}