"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const SideBar = ({user}: SiderbarProps) => {
    const pathName = usePathname();
  return (
    <section className='sticky left-0 top-0 flex h-screen w-60 flex-col justify-between border-r border-gray-200 bg-white pt-8 max-md:hidden sm:p-4 xl:p-6'>
        <nav className='flex flex-col gap-4'>
            <Link href="/" className='mb-12 cursor-pointer flex items-center gap-2'>
                <Image src="/icons/logo.svg" width={24} height={24} alt="Logo"
                className='size-[24px] max-xl:size-14'/>
                <h1 className='font-ibm-plex-serif text-[26px] font-bold text-black-1 max-xl:hidden'>Horizon</h1>
            </Link>

            {sidebarLinks.map((item) => {
                const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
                return (
                    <Link
                       href={item.route}
                       key={item.label}
                       className={cn(
                        "flex items-center gap-3 rounded-lg px-4 py-3 transition-colors",
                        isActive
                        ? "bg-gradient-to-r from-[#0179FE] to-[#4893FF] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                        )}>
                        <div className='relative size-[20px]'>
                            <Image src={item.imgURL} alt={item.label} fill className={cn({
                                'brightness-[3] invert-0': isActive
                            })}/>
                        </div>
                        <p className={cn('text-base font-semibold text-black-2 max-xl:hidden', {
                            '!text-white' : isActive
                        })}>
                            {item.label}
                        </p>
                    </Link>
                )
            })}
        </nav>
    </section>
  )
}

export default SideBar