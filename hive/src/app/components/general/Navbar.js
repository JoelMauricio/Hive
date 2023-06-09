"use client"
import logo from '@/app/icons/logo.svg'
import Image from 'next/image';
import Link from 'next/link';
import IconHome from '@/app/icons/Home';
import IconPerson from '@/app/icons/Profile';
import IconSetting from '@/app/icons/Setting';
import IconDark from '@/app/icons/Dark';

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
                    <Link href={"/explore"} className='w-[100%] min-h-[30%] flex gap-4 items-center p-2'><IconHome className="w-[1.5rem] h-[1.5rem]" /><span className='text-[1.4rem]'>Explore</span></Link>
                    <Link href={"/profile"} className='w-[100%] min-h-[30%] flex gap-4 items-center p-2'><IconPerson className="w-[1.5rem] h-[1.5rem]" /><span className='text-[1.4rem]'>Profile</span> </Link>
                    <Link href={"/settings"} className='w-[100%] min-h-[30%] flex gap-4 items-center p-2'><IconSetting className="w-[1.5rem] h-[1.5rem]" /><span className='text-[1.4rem]'>Settings</span> </Link>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                {/* botones */}
                <div className='w-[100%] min-h-[30%] flex gap-4 items-center p-2'><IconDark className="w-[1.5rem] h-[1.5rem]" /><span className='text-[1.4rem]'>Oscuro</span> </div>
            </div>
        </div>
    )
}