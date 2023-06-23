"use client"
import logo from '@/app/icons/logo.svg'
import Image from 'next/image';
import Link from 'next/link';
import IconHome from '@/app/icons/Home';
import IconPerson from '@/app/icons/Profile';
import IconSetting from '@/app/icons/Setting';
import IconDark from '@/app/icons/Dark';
import IconBookmarkFill from '@/app/icons/Saved';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const IconStyling = "w-[1.4rem] h-[1.4rem]";
    const LinkStyle = 'w-[100%] min-h-[30%] flex gap-4 items-center p-2 focus:outline-none focus:font-bold focus:min-h-[32%]';
    const TextStyle = 'text-[1.2rem]';

    return (
        <div className='min-h-screen w-[25%] flex flex-col px-3 py-5 justify-between'>
            <div className='flex flex-col gap-5'>
                {/* Seccion dle logo */}
                <div className='flex w-full gap-2 items-center'>
                    <Image src={logo} className='w-[4rem] h-[3rem]'></Image>
                    <span className='text-[1.90rem]'>HIVE</span>
                </div>
                {/* Menu */}
                <div className='flex flex-col gap-1'>
                    {/* botones */}
                    <Link href={"/"} className={LinkStyle}><IconHome className={IconStyling} /><span className={TextStyle}>Explore</span></Link>
                    <Link href={"/profile"} className={LinkStyle}><IconPerson className={IconStyling} /><span className={TextStyle}>Profile</span> </Link>
                    <Link href={"/favorites"} className={LinkStyle}><IconBookmarkFill className={IconStyling} /><span className={TextStyle}>Favorites</span> </Link>
                </div>
            </div>
            {/*
            <div className='flex flex-col gap-1'>
                <button className={LinkStyle}><IconDark className={IconStyling} /><span className={TextStyle}>Oscuro</span> </button>
            </div>
            */}
        </div >
    )
}