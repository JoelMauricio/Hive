import Card from '@/app/components/general/Card';
import { dPadding } from '@/app/constants';

export default function Home() {
  return (
    <main className="flex min-h-screen w-[60%] flex-col items-center justify-between justify-self-center mx-auto bg-red">
      <div className='w-full h-screen flex'>
        <div className='min-h-screen w-[20%] bg-slate-50 flex flex-col px-10 py-5'>

        </div>
        <div className='min-h-screen w-[60%] bg-slate-200 flex flex-col px-5 py-5'>
          <Card User={'Laura'} Message={'Saludos'} />
        </div>
        <div className='min-h-screen w-[20%] bg-slate-50 flex flex-col'>

        </div>

      </div>
    </main >
  )
}
