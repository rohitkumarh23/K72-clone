import React from 'react'
import Video from '../components/home/video'
import HomeHeroText from '../components/home/homeHeroText'
import HomeBottomText from '../components/home/homeBottomText'

const Home = () => {
    return (
        <div className='text-white relative min-h-[100dvh] overflow-hidden'>
            <div className='w-screen h-full '>
                <Video /> 
            </div>
            <div className='min-h-[100dvh]  w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
                <HomeHeroText />
                <HomeBottomText />

            </div>

        </div>
    )
}

export default Home