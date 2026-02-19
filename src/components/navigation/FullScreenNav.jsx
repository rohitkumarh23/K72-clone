import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import { NavbarContext } from '../context/NavContext'

const FullScreenNav = () => {
    const title = useRef(null)
    const fullScreenRef = useRef(null)
    const fullNavLinksRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)
   


    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('#fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
          
            height: 0,
            stagger: {
                amount: 0.2
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('#fullscreennav', {
            display: 'none',
        })
    }


    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()
           
        }
    }, [navOpen])




    return (
        <div ref={fullScreenRef} id='fullscreennav' className=' hidden  text-white overflow-hidden h-screen z-50  w-full absolute'>
            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative'>
                <div className='navlink flex w-full justify-between lg:p-5 md:p-3 p-2.5 items-start'>
                    <div className=''>
                        <div className=' lg:w-45 w-28 '>
                            <svg className='w-full ' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div onClick={() => {
                        setNavOpen(false)
                    }} className='lg:h-32 lg:w-32 h-25  w-25 cursor-pointer   relative '>
                        <div className='lg:w-1 w-0.5 lg:h-44 h-34  bg-white  -rotate-45 origin-top absolute'></div>
                        <div className='lg:w-1 w-0.5 lg:h-44 h-34 right-0 bg-white  rotate-45 origin-top absolute'></div>
                    </div>
                </div>
                <div className='lg:mt-0 md:mt-56 mt-33'>
                    <div onMouseEnter={() => {
                        title.current.style.height = "100%"
                        title.current.style.zIndex = 99

                    }} onMouseLeave={() => {
                        title.current.style.height = "0%"
                        title.current.style.zIndex = -99

                    }} className='link origin-top lg:py-2 md:py-1 py-1 relative border-t-[0.22px] border-white '>
                        <h1 className='font-[font2] text-center lg:mt-0 mt-1 md:mt-1  lg:text-[8vw] md:text-[12vw] text-[15vw] lg:leading-[0.9] md:leading-[0.8] leading-10 font-medium'>PROJETS</h1>
                        <div ref={title} className='moveLink absolute text-black flex items-center justify-center top-0 h-0 w-full -z-10 transition-all   bg-[#D3FD50]'>
                            <div className='moveX flex font-[font2]   items-center'>
                                <h2 className='whitespace-nowrap  text-center  lg:text-[8vw] text-[15vw] md:text-[14vw] lg:leading-[0.9] leading-0 font-medium'>POUR TOUT VIOR</h2>
                                <img className='lg:h-26 md:h-20 h-10 rounded-full shrink-0 lg:w-96 md:w-62 w-40 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap  text-center  lg:text-[8vw] text-[15vw]  md:text-[14vw] lg:leading-[0.9] leading-0 font-medium'>POUR TOUT VIOR</h2>
                                <img className='lg:h-26 md:h-20 h-10 rounded-full shrink-0 lg:w-96 md:w-62 w-40 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div>
                            <div className='moveX flex font-[font2]   items-center'>
                                <h2 className='whitespace-nowrap  text-center  lg:text-[8vw] text-[15vw]  md:text-[14vw]   lg:leading-[0.9] leading-0 font-medium'>POUR TOUT VIOR</h2>
                                <img className='lg:h-26 md:h-20 h-10 rounded-full shrink-0 lg:w-96 md:w-62 w-40 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap  text-center  lg:text-[8vw] text-[15vw]  md:text-[14vw] lg:leading-[0.9] leading-0 font-medium'>POUR TOUT VIOR</h2>
                                <img className='lg:h-26 md:h-20 h-10 rounded-full shrink-0 lg:w-96 md:w-62 w-40 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='link font-[font2] lg:py-2 py-1  md:py-1 origin-top relative border-t-[0.22px] border-white '>
                        <h1  className='font-[font2] text-center lg:mt-0 mt-1 md:mt-1  lg:text-[8vw] md:text-[12vw] text-[15vw] lg:leading-[0.9] md:leading-[0.8] leading-10 font-medium'>AGENCE</h1>
                        <div className='moveLink absolute lg:py-2 md:py-2 py-2 text-black flex top-0 items-center justify-center   bg-[#D3FD50]'>
                            <div className='moveX flex   items-center justify-center'>
                                 <h2 className='whitespace-nowrap  text-center  lg:text-[8vw] text-[15vw] lg:leading-[0.9]  md:text-[14vw] leading-0 font-medium'>POUR TOUT VIOR</h2>
                                <img className='lg:h-26 md:h-20 h-10 rounded-full shrink-0 lg:w-96 md:w-62 w-40 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap  text-center  lg:text-[8vw] text-[15vw] lg:leading-[0.9]  md:text-[14vw] leading-0 font-medium'>POUR TOUT VIOR</h2>
                                <img className='lg:h-26 md:h-20 h-10 rounded-full shrink-0 lg:w-96 md:w-62 w-40 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div>
                            <div className='moveX flex   items-center justify-center'>
                               <h2 className='whitespace-nowrap  text-center  lg:text-[8vw] text-[15vw] lg:leading-[0.9]  md:text-[14vw] leading-0 font-medium'>POUR TOUT VIOR</h2>
                                <img className='lg:h-26 md:h-20 h-10 rounded-full shrink-0 lg:w-96 md:w-62 w-40 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap  text-center  lg:text-[8vw] text-[15vw] lg:leading-[0.9]  md:text-[14vw] leading-0 font-medium'>POUR TOUT VIOR</h2>
                                <img className='lg:h-26 md:h-20 h-10 rounded-full shrink-0 lg:w-96 md:w-62 w-40 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div>
                        </div>
                    </div>
                      <div className='link font-[font2] lg:py-2 py-1  md:py-1 origin-top relative border-t-[0.22px] border-white '>
                        <h1  className='font-[font2] text-center lg:mt-0 mt-1 md:mt-1  lg:text-[8vw] md:text-[12vw] text-[15vw] lg:leading-[0.9] md:leading-[0.8] leading-10 font-medium'>AGENCE</h1>
                        <div className='moveLink absolute lg:py-2 md:py-2 py-2 text-black flex top-0 items-center justify-center   bg-[#D3FD50]'>
                            <div className='moveX flex   items-center justify-center'>
                                 <h2 className='whitespace-nowrap  text-center  lg:text-[8vw] text-[15vw] lg:leading-[0.9]  md:text-[14vw] leading-0 font-medium'>POUR TOUT VIOR</h2>
                                <img className='lg:h-26 md:h-20 h-10 rounded-full shrink-0 lg:w-96 md:w-62 w-40 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap  text-center  lg:text-[8vw] text-[15vw] lg:leading-[0.9]  md:text-[14vw] leading-0 font-medium'>POUR TOUT VIOR</h2>
                                <img className='lg:h-26 md:h-20 h-10 rounded-full shrink-0 lg:w-96 md:w-62 w-40 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div>
                            <div className='moveX flex   items-center justify-center'>
                               <h2 className='whitespace-nowrap  text-center  lg:text-[8vw] text-[15vw] lg:leading-[0.9]  md:text-[14vw] leading-0 font-medium'>POUR TOUT VIOR</h2>
                                <img className='lg:h-26 md:h-20 h-10 rounded-full shrink-0 lg:w-96 md:w-62 w-40 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap  text-center  lg:text-[8vw] text-[15vw] lg:leading-[0.9]  md:text-[14vw] leading-0 font-medium'>POUR TOUT VIOR</h2>
                                <img className='lg:h-26 md:h-20 h-10 rounded-full shrink-0 lg:w-96 md:w-62 w-40 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div>
                        </div>
                    </div>
                      <div className='link font-[font2] lg:py-2 py-1  md:py-1 origin-top relative border-y-[0.22px] border-white '>
                        <h1  className='font-[font2] text-center lg:mt-0 mt-1 md:mt-1  lg:text-[8vw] md:text-[12vw] text-[15vw] lg:leading-[0.9] md:leading-[0.8] leading-10 font-medium'>AGENCE</h1>
                        <div className='moveLink absolute lg:py-2 md:py-2 py-2 text-black flex top-0 items-center justify-center   bg-[#D3FD50]'>
                            <div className='moveX flex   items-center justify-center'>
                                 <h2 className='whitespace-nowrap  text-center  lg:text-[8vw] text-[15vw] lg:leading-[0.9  md:text-[14vw]] leading-0 font-medium'>POUR TOUT VIOR</h2>
                                <img className='lg:h-26 md:h-20 h-10 rounded-full shrink-0 lg:w-96 md:w-62 w-40 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap  text-center  lg:text-[8vw] text-[15vw] lg:leading-[0.9] leading-0 font-medium'>POUR TOUT VIOR</h2>
                                <img className='lg:h-26 md:h-20 h-10 rounded-full shrink-0 lg:w-96 md:w-62 w-40 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div>
                            <div className='moveX flex   items-center justify-center'>
                               <h2 className='whitespace-nowrap  text-center  lg:text-[8vw] text-[15vw] lg:leading-[0.9]  md:text-[14vw] leading-0 font-medium'>POUR TOUT VIOR</h2>
                                <img className='lg:h-26 md:h-20 h-10 rounded-full shrink-0 lg:w-96 md:w-62 w-40 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap  text-center  lg:text-[8vw] text-[15vw] lg:leading-[0.9] leading-0 font-medium'>POUR TOUT VIOR</h2>
                                <img className='lg:h-26 md:h-20 h-10 rounded-full shrink-0 lg:w-96 md:w-62 w-40 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div>
                        </div>
                    </div>
                   

                </div>
            </div>
        </div>
    )
}

export default FullScreenNav