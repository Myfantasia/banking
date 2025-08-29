'use client'
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const MobileNav = ({user}: MobileNavProps) => {
    const pathName = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
          <SheetTrigger>
            <Image src='/icons/hamburger.svg' width={30} height={30} alt='menu' className='cursor-pointer'/>
          </SheetTrigger>
          <SheetContent side='left' className='border-none bg-white'>
            <Link href="/" className='cursor-pointer flex items-center gap-1 px-4'>
                <Image src="/icons/logo.svg" width={24} height={24} alt="Logo"/>
                <h1 className='text-[26px] font-bold text-black-1 font-ibm-plex-serif p-4'>Horizon</h1>
            </Link>
            <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
                <SheetClose asChild>
                    <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                        {sidebarLinks.map((item) => {
                        const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
                        return (
                            <SheetClose asChild key={item.route}>
                          <Link
                            href={item.route}
                            key={item.label}
                            className={cn(
                            "flex gap-3 items-center p-4 rounded-lg w-full max-w-60",
                            isActive
                            ? "bg-gradient-to-r from-[#0179FE] to-[#4893FF] text-white"
                            : "text-gray-700 hover:bg-gray-100"
                           )}>
                           
                              <Image src={item.imgURL} alt={item.label} width={20} height={20} className={cn({
                              'brightness-[3] invert-0': isActive
                              })}/>
                            
                            <p className={cn('text-[16px] leading-[24px] font-semibold text-black-2', {
                               'text-white' : isActive
                                })}>
                                {item.label}
                            </p>
                        </Link>
                        </SheetClose>
                        )
                      })}
                    </nav>
                </SheetClose>
            </div>

          </SheetContent>
        </Sheet>
    </section>
  )
}

export default MobileNav
