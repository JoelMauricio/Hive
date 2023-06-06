import Card from '@/app/components/general/Card';
import Image from 'next/image';
import logo from '@/app/logo.svg'
import { dPadding } from '@/app/constants';

export default function Home() {
  return (
    <main className="flex min-h-screen w-[75%] flex-col items-center justify-between justify-self-center mx-auto bg-red">
      <div className='w-full h-screen flex'>
        <div className='min-h-screen w-[20%] flex flex-col px-5 py-5 border-x-2 border-slate-50'>
          {/* Seccion dle logo */}
          <div className='flex w-full gap-2 items-center'>
            <Image src={logo} className='w-[6rem] h-[5rem]'></Image>
            <span className='text-[2.5rem]'>HIVE</span>
          </div>
          {/* Menu */}
          <div className='flex flex-col'>
            {/* botones */}
            <div></div>
          </div>
        </div>
        <div className='min-h-screen w-[60%]  flex flex-col px-5 py-5 gap-2'>
          <h1>What's new?</h1>

          <Card User={'Laura'} Message={'Saludos'} />
        </div>
        <div className='min-h-screen w-[20%] flex flex-col border-x-2 border-slate-50'>

        </div>

      </div>
    </main >
  )
}
