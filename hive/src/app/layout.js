"use client";

import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/general/Navbar'
import SearchBar from './components/general/Searchbar'
import UserCard from './components/general/UserCard'
import { placeholder } from './constants'
import AuthContextProvider from './context/authentication'
import { useAuthContext } from './context/authentication'
import { useRouter } from 'next/navigation';
import supabase from './supabaseClient';
import SearchColumn from './components/general/SearchColumn';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hive',
  description: 'Generated by Joel&Victor',
}


export default function RootLayout({ children }) {
  const { profile, useProfile } = useAuthContext()
  const router = useRouter()

  async function getUsers() {
    const { data, error } = await supabase.from("tbluser").select("*")
  }



  if (profile !== undefined) {
    router.push("/login")
  }

  getUsers()
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen w-[100%] flex-col items-center justify-between justify-self-center mx-auto bg-red">
          <AuthContextProvider>
            {
              profile === undefined ? (<div className='w-full h-screen flex'>
                <Navbar />
                <div className='min-h-screen w-[60%]  flex flex-col  py-5 gap-1 border-x border-[rgba(102,102,102,1)] overflow-y-auto'>
                  {children}
                </div>
                <div className='min-h-screen w-[25%] flex flex-col px-3 py-5  justify-between'>
                  <SearchColumn />
                </div>
              </div >) :
                (< div className='min-h-screen flex items-center border-[rgba(102,102,102,1)] overflow-y-auto'>
                  {children}
                </div>)
            }
          </AuthContextProvider>
        </main >
      </body>
    </html >
  )
}
