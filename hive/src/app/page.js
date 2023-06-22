import Card from '@/app/components/general/Card';
import Navbar from '@/app/components/general/Navbar';
import { dPadding } from '@/app/constants';
import Image from 'next/image';
import IconSend from '@/app/icons/Send';
import SearchBar from '@/app/components/general/Searchbar';

export default function Home() {
  return (
    <main className="flex min-h-screen w-[75%] flex-col items-center justify-between justify-self-center mx-auto bg-red">
      <div className='w-full h-screen flex'>
        <Navbar />
        <div className='min-h-screen w-[60%]  flex flex-col px-2 py-5 gap-1'>
          <h1>What's new?</h1>
          <div className='flex flex-col min-w-[100%] h-fit py-1 px-2 '>
            < div className='flex '>
              < div className='min-w-[10%] items-center mx-auto' >
                <Image className='w-[50px] h-[50px] bg-red-200 rounded-full mx-auto mt-2' />
              </div >
              <div className='flex flex-col min-w-[90%] gap-2 p-2 pr-4'>
                <span className='font-medium text-[1rem]'>Write your thoughts...</span>
                <div className='flex gap-2 h-[100%]'>
                  <input type="text" name="newMessage" className='min-w-[90%] min-h-[25px] h-[100%] rounded-md bg-white shadow-inherit' style={{ "box-shadow": "0px 4px 4px 0px;" }}></input>
                  <div className='min-w-[10%] min-h-[25px] h-[100%] rounded-md grid items-center justify-center bg-[#FF9858]'><IconSend /></div>
                </div>
              </div>
            </div >
          </div >
          <Card User={'Laura'} Message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor, mi vitae rhoncus consectetur, mauris metus ornare lacus, eget rutrum nisl massa eu velit. Nunc libero enim, semper eu dolor in, laoreet fermentum mauris. Aenean ligula lacus, cursus et faucibus tincidunt, laoreet ac sapien. Phasellus maximus elit at faucibus porttitor. Mauris eget elit varius, eleifend purus vel, lobortis purus. Donec quis justo lorem. Aenean nec euismod nunc, a cursus turpis. In rhoncus facilisis lobortis. Aliquam sollicitudin urna semper, tempus ligula ut, accumsan dui. Nunc non nulla urna. Nullam metus eros, lacinia nec turpis et, sollicitudin rutrum turpis.'} />
        </div>
        <SearchBar />
      </div >
    </main >
  )
}
