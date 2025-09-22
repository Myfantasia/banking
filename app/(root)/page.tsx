import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async () => {

  const loggedIn = await getLoggedInUser();
  return (
    <section className='no-scrollbar flex w-full flex-row max-[1279px]:max-h-screen max-[1279px]:overflow-y-scroll'>
      <div className='no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll'>
        <header className="flex flex-col justify-between gap-8">
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn?. name ?? 'Guest'}
          subtext='Access and manage your account and transactions.'
          />

          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1240.80}
          />
        </header>
      </div>
      {loggedIn ? (   // ✅ Only show RightSidebar if logged in
        <RightSidebar 
          user={loggedIn}
          transactions={[]}
          banks={[
            { currentBalance:1243.80 }, 
            { currentBalance:3800.70 }
          ]}
        />
      ) : null}
    </section>
  )
}

export default Home
