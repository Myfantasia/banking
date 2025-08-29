import { formatAmount } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const BankCard = ({account, userName, showBalance = true} : CreditCardProps) => {
  return (
    <div className='flex flex-col'>
      <Link href="/" className='relative flex h-[190px] w-full max-w-[320px] justify-between rounded-[20px] border border-white bg-[linear-gradient(90deg,#0179FE_0%,#4893FF_100%)] shadow-[8px_10px_16px_0px_rgba(0,0,0,0.05)] backdrop-blur-[6px]'>
        <div className='relative z-10 flex size-full max-w-[228px] flex-col justify-between rounded-l-[20px] bg-gray-700 bg-[linear-gradient(90deg,#0179FE_0%,#4893FF_100%)] px-5 pb-4 pt-5'>
          <div>
            <h1 className='text-[16px] leading-[24px] font-semibold text-white'>
              {account.name || userName}
            </h1>
            <p className='font-ibm-plex-serif font-black text-white'>
              {formatAmount(account.currentBalance)}
            </p>
          </div>

          <article className='flex flex-col gap-2'>
            <div className='flex justify-between'>
                <h1 className='text-[12px] leading-[16px] font-semibold text-white'>
                  {userName}
                </h1>
                <h2 className='text-[12px] leading-[16px] font-semibold text-white'>
                  ●● / ●●
                </h2>
            </div>
            <p className='text-[14px] leading-[20px] font-semibold tracking-[1.1px] text-white'>
               ●●●● ●●●● ●●●● <span className='text-[16px] leading-[24px]'>1234</span>
            </p>
          </article>
        </div>
        
        <div className='flex size-full flex-1 flex-col items-end justify-between rounded-r-[20px] bg-[linear-gradient(90deg,#0179FE_0%,#4893FF_100%)] bg-cover bg-center bg-no-repeat py-5 pr-5'>
          <Image src='/icons/Paypass.svg' width={20} height={24} alt='pay' />
          <Image src='/icons/mastercard.svg' width={44} height={32} alt='mastercard' className='ml-5' />
        </div>

        <Image src='/icons/lines.png' width={314} height={190} alt='lines' className='absolute top-0 left-0' />
      </Link>
    </div>
  )
}

export default BankCard
