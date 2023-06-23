import Card from '@/app/components/general/Card';
import Navbar from '@/app/components/general/Navbar';
import { dPadding } from '@/app/constants';
import Image from 'next/image';
import IconSend from '@/app/icons/Send';
import SearchBar from '@/app/components/general/Searchbar';
import InputBar from './components/general/CustomInput';
import { placeholder } from '@/app/constants';

export default function Home() {

  return (<>
    <h1 className='font-bold text-[1.2rem] px-2'>What's new?</h1>
    <div className='flex flex-col min-w-[100%] h-fit py-1 px-2 '>
      < div className='flex '>
        < div className='min-w-[10%] items-center mx-auto' >
          <Image className='w-[50px] h-[50px] bg-red-200 rounded-full mx-auto mt-2' />
        </div >
        <div className='flex flex-col min-w-[90%] gap-2 p-2 pr-4'>
          <span className='font-medium text-[1rem]'>Write your thoughts...</span>
          <div className='flex gap-2 h-[100%]'>
            <InputBar text={"Max 250 characters..."}></InputBar>
          </div>
        </div>
      </div >
    </div >
    <div>
      {
        placeholder.map((post, index) => (
          <Card key={index} User={post.user} Message={post.message} HasImage={post.hasImage} ImageSrc={post.imageSrc} />
        ))
      }
    </div>
  </>
  )
}
