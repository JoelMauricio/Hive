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
        <div className='min-h-screen w-[20%] flex flex-col px-3 py-5 border-x border-slate-50 justify-between'>
            <div className='flex flex-col gap-5'>
                {/* Seccion dle logo */}
                <div className='flex w-full gap-2 items-center'>
                    <Image src={logo} className='w-[4rem] h-[3rem]'></Image>
                    <span className='text-[1.90rem]'>HIVE</span>
                </div>
                {/* Menu */}
                <div className='flex flex-col gap-1'>
                    {/* botones */}
                    <Link href={"/"} className='w-[100%] min-h-[30%] flex gap-4 items-center p-2'><IconHome className="w-[1.4rem] h-[1.4rem]" /><span className='text-[1.2rem]'>Explore</span></Link>
                    <Link href={"/profile"} className='w-[100%] min-h-[30%] flex gap-4 items-center p-2'><IconPerson className="w-[1.4rem] h-[1.4rem]" /><span className='text-[1.2rem]'>Profile</span> </Link>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                {/* botones */}
                <button className='w-[100%] min-h-[30%] flex gap-4 items-center p-2'><IconDark className="w-[1.4rem] h-[1.4rem]" /><span className='text-[1.2rem]'>Oscuro</span> </button>
            </div>
        </div >
    )
}