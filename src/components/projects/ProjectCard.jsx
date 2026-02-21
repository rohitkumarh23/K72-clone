import React from 'react'

const ProjectCard = ({ image1, image2 }) => {
  return (
    <>
      <div className=" lg:w-1/2  w-full   relative group   h-full hover:rounded-[70px] object-cover overflow-hidden transition-all">
        <img className="w-full h-full rounded object-cover" src={image1} alt='image1' />
         <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <h2 className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full '>Vior le projet</h2>
                </div>
      </div>
      <div className=" hidden lg:block  lg:w-1/2 w-full   relative group  h-full hover:rounded-[70px] object-cover overflow-hidden transition-all">
        <img className="w-full h-full rounded object-cover" src={image2} alt='image2' />
        <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <h2 className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full '>Vior le projet</h2>
                </div>
      </div>
    </>
  )
}


export default ProjectCard