import Card from '@/app/components/general/Card';
import Image from 'next/image';
import logo from '@/app/logo.svg'
import { dPadding } from '@/app/constants';

export default function Home() {
  return (
    <main className="flex min-h-screen w-[75%] flex-col items-center justify-between justify-self-center mx-auto bg-red">
      <div className='w-full h-screen flex'>
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
              <div className='w-[100%] min-h-[30%]'><span></span> Explore</div>
              <div className='w-[100%] min-h-[30%]'><span></span> Profile</div>
              <div className='w-[100%] min-h-[30%]'><span></span> Settings</div>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            {/* botones */}
            <div className='w-[100%] min-h-[30%]'><span></span> Oscuro</div>
          </div>
        </div>
        <div className='min-h-screen w-[60%]  flex flex-col px-5 py-5 gap-2'>
          <h1>What's new?</h1>
          <div className='flex flex-col min-w-[100%] h-fit  p-2 '>
            < div className='flex '>
              < div className='min-w-[10%] items-center mx-auto' >
                <Image className='w-[50px] h-[50px] bg-red-200 rounded-full self-center' />
              </div >
              <div className='flex flex-col min-w-[90%] gap-2'>
                <span className='font-medium text-xl'>Write your thoughts...</span>
                <div className='flex gap-2 h-[100%]'>
                  <div className='min-w-[90%] min-h-[30px] h-[100%] rounded-md bg-slate-500'></div>
                  <div className='min-w-[10%] min-h-[30px] h-[100%] rounded-md bg-gray-100'></div>
                </div>
              </div>
            </div >
          </div >
          <Card User={'Laura'} Message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor, mi vitae rhoncus consectetur, mauris metus ornare lacus, eget rutrum nisl massa eu velit. Nunc libero enim, semper eu dolor in, laoreet fermentum mauris. Aenean ligula lacus, cursus et faucibus tincidunt, laoreet ac sapien. Phasellus maximus elit at faucibus porttitor. Mauris eget elit varius, eleifend purus vel, lobortis purus. Donec quis justo lorem. Aenean nec euismod nunc, a cursus turpis. In rhoncus facilisis lobortis. Aliquam sollicitudin urna semper, tempus ligula ut, accumsan dui. Nunc non nulla urna. Nullam metus eros, lacinia nec turpis et, sollicitudin rutrum turpis.'} />
        </div>
        <div className='min-h-screen w-[20%] flex flex-col border-x-2 border-slate-50'>

        </div>

      </div >
    </main >
  )
}
