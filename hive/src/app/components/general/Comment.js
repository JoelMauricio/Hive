"use client"
import Image from 'next/image'

export default function CommentCard({ User, Message }) {
    return (
        <div className='flex flex-row min-w-[90%] h-fit p-2 rounded-md bg-[rgba(102,102,102,1)]' >
            < div className='flex flex-col min-w-[10%] items-center' >
                <Image alt={`${User}'s photo`} src={"https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="} className='w-[45px] h-[45px] bg-white rounded-full' width={500} height={500} />
                <span className='font-medium text-base'>{User}</span>
            </div >
            <div className='flex flex-col min-w-[90%] p-2 pr-4 gap-2'>
                <p className='text-justify text-[12px]'>{Message}</p>
            </div>
        </div >
    );
}