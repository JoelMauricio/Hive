import Card from '@/app/components/general/Card';
import Navbar from '@/app/components/general/Navbar';
import { dPadding } from '@/app/constants';
import Image from 'next/image';
import IconSend from '@/app/icons/Send';
import SearchBar from '@/app/components/general/Searchbar';


export default function Home() {

  return (<>
    <h1>What's new?</h1>
    <div className='flex flex-col min-w-[100%] h-fit py-1 px-2 '>
      < div className='flex '>
        < div className='min-w-[10%] items-center mx-auto' >
          <Image className='w-[50px] h-[50px] bg-red-200 rounded-full mx-auto mt-2' />
        </div >
        <div className='flex flex-col min-w-[90%] gap-2 p-2 pr-4'>
          <span className='font-medium text-[1rem]'>Write your thoughts...</span>
          <div className='flex gap-2 h-[100%]'>
            <textarea name="newMessage" wrap='soft' maxLength={240} className='resize-none min-w-[90%] min-h-[25px] rounded-md bg-white shadow-inherit text-black p-2 text-[.8rem]' style={{ "boxShadow": "0px 4px 4px 0px" }} ></textarea>
            <div className='min-w-[10%] min-h-[25px] h-[100%] rounded-md grid items-center justify-center bg-[#FF9858]'><IconSend /></div>
          </div>
        </div>
      </div >
    </div >
    <Card User={'Laura'} Message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed orci vel dui iaculis finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In aliquam orci sed odio laoreet, at placerat purus sed.'} />
  </>
  )
}
