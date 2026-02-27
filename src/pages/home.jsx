import React from 'react'
import Video from '../components/home/video'
import HomeHeroText from '../components/home/homeHeroText'
import HomeBottomText from '../components/home/homeBottomText'

const Home = () => {
    return (
        <div className='text-white min-h-[100dvh] bg-green-500 overflow-hidden'>
            <div className='w-full h-full bg-red-500 fixed'>
                <Video /> 
            </div>
            <div className='min-h-[100dvh]  w-full relative pb-5 overflow-hidden flex flex-col justify-between'>
                <HomeHeroText />
                <HomeBottomText />

            </div>

        </div>
    )
}

export default Home