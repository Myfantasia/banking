"use client"
import React from 'react'
import CountUp from 'react-countup'

const AniimatedCouter = ({amount}: {amount: number}) => {
  return (
    <div className='w-full'>
      <CountUp
        decimal=',' 
        decimals={2}
        duration={2.5}
        prefix='KSH'
        end={amount}/>
    </div>
  )
}

export default AniimatedCouter
