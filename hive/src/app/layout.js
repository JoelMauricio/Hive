import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/general/Navbar'
import SearchBar from './components/general/Searchbar'
import UserCard from './components/general/UserCard'
import { placeholder } from './constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hive',
  description: 'Generated by Joel&Victor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen w-[100%] flex-col items-center justify-between justify-self-center mx-auto bg-red">
          <div className='w-full h-screen flex'>
            <Navbar />
            <div className='min-h-screen w-[60%]  flex flex-col  py-5 gap-1 border-x border-[rgba(102,102,102,1)] overflow-y-auto'>
              {children}
            </div>
            <div className='min-h-screen w-[25%] flex flex-col px-3 py-5  justify-between'>
              <SearchBar text={"Search accounts"} className="mb-2" />
              <div className='flex flex-col w-full h-full overflow-y-auto mt-4 gap-2 last group'>
                {
                  placeholder.map((user, index) => (
                    <UserCard key={index} UserId={user.userId} User={user.user} />
                  ))
                }
              </div>
            </div>
          </div >
        </main >
      </body>
    </html>
  )
}
