"use client"
import logo from '@/app/logo.svg'
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className='min-h-screen w-[20%] flex flex-col px-5 py-5 border-x-2 border-slate-50 justify-between'>
            <div className='flex flex-col gap-5'>
                {/* Seccion dle logo */}
                <div className='flex w-full gap-2 items-center'>
                    <Image src={logo} className='w-[6rem] h-[5rem]'></Image>
                    <span className='text-[2.5rem]'>HIVE</span>
                </div>
                {/* Menu */}
                <div className='flex flex-col gap-2'>
                    {/* botones */}
                    <Link href={"/"} className='w-[100%] min-h-[30%]'><span></span> Explore</Link>
                    <Link href={"/"} className='w-[100%] min-h-[30%]'><span></span> Profile</Link>
                    <Link href={"/"} className='w-[100%] min-h-[30%]'><span></span> Settings</Link>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                {/* botones */}
                <div className='w-[100%] min-h-[30%]'><span></span> Oscuro</div>
            </div>
        </div>
    )
}