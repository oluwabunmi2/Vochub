import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'


function Home() {
  return (
    <div className="">
        <div className='sticky top-0 bg-[#F9FEFF] dark:bg-[#171716] z-50 '>
        <Header />
        </div>
        <div>
            <Hero />
        </div>
       
       
    </div>
  )
}

export default Home
