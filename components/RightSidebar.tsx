import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BankCard from './BankCard'

const RightSidebar = ({ user, banks }: RightSidebarProps) => {

  return (
    <aside className="no-scrollbar hidden !h-screen !max-h-screen flex flex-col border-l border-gray-200 xl:flex !w-[355px] xl:!overflow-y-scroll">
      <section className="flex flex-col pb-8">
        <div className="h-[120px] w-full bg-[url('/icons/gradient-mesh.svg')] bg-cover bg-no-repeat" />
        <div className="relative flex px-6 justify-center xl:justify-start">
          <div className="absolute -top-8 flex items-center justify-center size-24 rounded-full bg-gray-100 border-8 border-white p-2 shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]">
            <span className="text-5xl font-bold text-blue-500">{user.firstName[0]}</span>
          </div>

          <div className="flex flex-col pt-20">
            <h1 className='font-semibold text-gray-900 text-[24px] leading-[30px]'>
              {user.firstName} {user.lastName}
            </h1>
            <p className="font-normal text-gray-600 text-[16px] leading-[24px]">
              {user.email}
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-between gap-4 px-4 py-4">
        <div className="flex w-full justify-between">
          <h2 className="font-semibold text-gray-900 text-[18px] leading-[22px]">My Banks</h2>
          <Link href="/" className="flex gap-2">
            <Image 
               src="/icons/plus.svg"
              width={20}
              height={20}
              alt="plus"
            />
            <h2 className="text-[14px] leading-[20px] font-semibold text-gray-600">
              Add Bank
            </h2>
          </Link>
        </div>

        {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className='relative z-10'>
              <BankCard 
                key={banks[0].$id}
                account={banks[0]}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard 
                  key={banks[1].$id}
                  account={banks[1]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  )
}

export default RightSidebar