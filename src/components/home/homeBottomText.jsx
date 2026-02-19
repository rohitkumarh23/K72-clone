import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = ()=>{
    return(
        <div className='flex items-center justify-center gap-2 '>
                            <p className='absolute right-0 lg:right-2 lg:leading-5 md:leading-6 md:bottom-32 md:text-[2.5vw] md:w-[50vw] leading-tight font-[font1]  lg:bottom-35  bottom-20 lg:w-[20vw] lg:text-[1vw] text-xs  w-64 '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>

            <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-26 flex items-center lg:px-10 px-5  border-white rounded-full uppercase'>
                <Link className='text-[6vw] lg:font-normal font-bold  ' to='/projects'>Projects</Link>
            </div>
            <div className='lg:border-3 border-2 hover:border-[#D3FD50]  hover:text-[#D3FD50] lg:h-26 flex items-center lg:px-10 px-5 border-white rounded-full uppercase'>
                <Link className='text-[6vw] lg:font-normal font-bold ' to='/agence'>Agence</Link>
            </div>
          
        </div>
    )
}

export default HomeBottomText