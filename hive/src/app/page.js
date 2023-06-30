import Card from '@/app/components/general/Card';
import Image from 'next/image';
import InputBar from './components/general/CustomInput';
import { placeholder } from '@/app/constants';
import NewPost from './components/general/NewPostCreator';

export default function Home() {

  return (<>
    <h1 className='font-bold text-[1.2rem] px-2'>What's new?</h1>
    <NewPost />
    <div>
      {
        placeholder.map((post, index) => (
          <Card key={index} UserId={post.userId} PostId={post.postId} User={post.user} Message={post.message} HasImage={post.hasImage} ImageSrc={post.imageSrc} />
        ))
      }
    </div>
  </>
  )
}
