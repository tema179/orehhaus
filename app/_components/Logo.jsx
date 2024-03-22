import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'
import localFont from 'next/font/local'

const headerFont = localFont({
  src: '../../public/fonts/OpenSans-Bold-webfont.woff2'
})

export default function Logo() {
  return (
    <Link href='/'>
      <div className='hover:opacity-75 transition items-center gap-x-2 flex'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={30}
          height={30}
        />
        <p className={cn(
          'text-lg text-neutral-700 pb-1',
          headerFont.className
        )}>
          Колузаево
        </p>
      </div>
    </Link>
  )
}
