'use client'
import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Logo from './Logo'
import { LogIn, LogOut } from 'lucide-react'
import Link from 'next/link'
import useStorage from '@/hooks/useStorage'
import { useStore } from '@/store/store'
import { AlignJustify } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  // const [user, setUser] = React.useState(null)

  const user = useStore((state) => state.user)
  const setUser = useStore((state) => state.setUser)

  const { set: setUser1, get: getUser, clear } = useStorage()


  useEffect(() => {
    const user1 = getUser()
    setUser(user1)
    console.log('setUser(JSON.parse(getUser()))', user1, 1, user, 2)
  }, [])

  const logout = () => {
    clear()
    setUser(null)
  }

  return (
    <div className='w-full fixed z-50 top-0 h-14 border-b shadow-sm bg-white flex items-center px-2'>
      <div className='w-full max-w-[1200px] relative mx-auto bg-white flex items-center px-2 justify-between'>
        <div className={cn('md:hidden h-screen p-5 w-[170px] transition-all duration-500 bg-white flex flex-col shadow-sm shadow-black justify-center items-center gap-x-4 fixed right-[-100%] top-2', open && 'right-0')}>
          <AlignJustify className='fixed top-2 right-2 ml-auto md:hidden flex text-black' onClick={() => setOpen(!open)} />
          <Button variant='ghost' size='xl' className='text-lg rounded-sm h-auto py-1.5 px-2 font-semibold block'>
            <Link href={'/contacts'}>Контакты</Link>
          </Button>
          <Button variant='ghost' size='xl' className='text-lg rounded-sm h-auto py-1.5 px-2 font-semibold block '>
            <Link href={'/about'}>О нас</Link>
          </Button>
          <Button variant='ghost' size='xl' className='text-lg rounded-sm h-auto py-1.5 px-2 font-semibold block'>
            <Link href={'/services'}>Услуги</Link>
          </Button>
          <Button variant='ghost' size='xl' className='text-lg rounded-sm h-auto py-1.5 px-2 font-semibold block'>
            <Link href={'/faq'}>Вопросы</Link>
          </Button>
        </div>
        {/* <MobileSidebar /> */}
        <div className='flex items-center gap-x-4 '>
          <div className='block'>
            <Logo />
          </div>
          <Button variant='ghost' size='sm' className='text-lg rounded-sm h-auto py-1.5 px-2 font-semibold hidden md:block'>
            <Link href={'/news'}>Блог</Link>
          </Button>
          <Button variant='ghost' size='sm' className='text-lg rounded-sm h-auto py-1.5 px-2 font-semibold hidden md:block'>
            <Link href={'/contacts'}>Контакты</Link>
          </Button>
          <Button variant='ghost' size='sm' className='text-lg rounded-sm h-auto py-1.5 px-2 font-semibold hidden md:block '>
            <Link href={'/about'}>О нас</Link>
          </Button>
          <Button variant='ghost' size='sm' className='text-lg rounded-sm h-auto py-1.5 px-2 font-semibold hidden md:block'>
            <Link href={'/services'}>Услуги</Link>
          </Button>
        </div>
        <div className='ml-auto hidden items-center gap-x-2 md:flex'>
          {!user?.token && <Link href={'/login'}><LogIn size={30} /></Link>}
          {user?.token && <div onClick={logout}><LogOut size={30} /></div>}
        </div>
        {/* <AlignJustify className='ml-auto md:hidden flex text-black' onClick={() => setOpen(!open)} /> */}
      </div>
    </div>

  )
}
