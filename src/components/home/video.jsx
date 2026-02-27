import React from 'react'
import myVideo from '../../assets/83c745cf.mp4'

const Video = () => {
  return (
   <div className='h-full w-full'>
     <video className='w-full h-full object-cover' autoPlay playsInline loop muted src={myVideo}>

     </video>
    </div>
  )
}

export default Video