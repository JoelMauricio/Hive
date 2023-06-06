"use client"
import Image from 'next/image'

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
                {/* buttons for interaction */}
            </div >
            <div className='flex w-[100%] justify-end gap-2'>
                <div className='flex gap-1'>1000 <span>C</span></div>
                <div className='flex gap-1'>1000 <span>L</span></div>
                <div className='flex gap-1'><span>G</span></div>
            </div>
        </div >
    );
}