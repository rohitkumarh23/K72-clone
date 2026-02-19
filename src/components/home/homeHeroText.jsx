import React from 'react'
import Video from './video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1]  mt-82 lg:mt-0 md:mt-65 pt-5 text-center'>
            <div className='lg:text-[9.5vw]  text-[12vw] uppercase lg:leading-[8vw] md:leading-[12vw] leading-[10vw] justify-center flex items-center'><h1>L'étincelle </h1></div>
            <div className='lg:text-[9.5vw]  text-[12vw] uppercase lg:leading-[8vw] md:leading-[12vw] leading-[10vw] justify-center flex items-center'><h1>qui</h1>
                <div className='h-[8vw] w-[16vw] rounded-full mt-3 overflow-hidden'>
                    <Video />
                </div>
                <h2>génère</h2>
            </div>
            <div className='lg:text-[9.5vw]  text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] md:leading-[12vw] justify-center flex items-center'><h2>la créativité</h2></div>
        </div>
    )
}

export default HomeHeroText