import ProjectCard from "../components/projects/ProjectCard"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollSmoother, ScrollTrigger } from "gsap/all"
import { useGSAP } from "@gsap/react"

// Import all images
import Thumbnail from './images/Thumbnail.png'
import PJC_SiteK72 from './images/PJC_SiteK72_Thumbnail_1280x960.jpg'
import OKA_thumbnail from './images/OKA_thumbnail.jpg'
import Fruite_thumbnail from './images/Fruite_thumbnail_bbq.jpg'
import CF_thumbnail from './images/CF_thumbnail.jpg'
import Shelton_thumbnail from './images/thumbnailimage_shelton.jpg'
import BEST_thumbnail from './images/BEST_site_menu_Thumbnail.jpg'
import ATable_thumbnail from './images/thumbnailimage_atable2.jpg'
import SollioAg_thumbnail from './images/thumbnailimage_SollioAg.jpg'
import Opto_thumbnail from './images/thumbnailimage_opto.jpg'
import WS_thumbnail from './images/WS---K72.ca---Thumbnail.jpg'
import Chalaxeur_thumbnail from './images/chalaxeur-thumbnail_img.jpg'



const Projects = () => {
    gsap.registerPlugin(ScrollTrigger)
    const container = useRef(null)

    useGSAP(() => {



        const sections = gsap.utils.toArray(".hero")

        sections.forEach((section) => {

            const inner = section.querySelector(".inner")

            gsap.fromTo(inner,
                { scaleY: 0.3, transformOrigin: "top" },
                {
                    scaleY: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        end: "top 30%",
                        scrub: 0.1,
                        invalidateOnRefresh: true
                    }
                }
            )


        })

    }, { scope: container })


   



    const projects = [
        {
            image1: Thumbnail,
            image2: PJC_SiteK72,
        },
        {
            image1: OKA_thumbnail,
            image2: Fruite_thumbnail,
        },
        {
            image1: CF_thumbnail,
            image2: Shelton_thumbnail,
        },
        {
            image1: BEST_thumbnail,
            image2: ATable_thumbnail,
        },
        {
            image1: SollioAg_thumbnail,
            image2: Opto_thumbnail,
        },
        {
            image1: WS_thumbnail,
            image2: Chalaxeur_thumbnail,
        },]





    return (
        <div ref={container} className="p-4 ">
            <div className="pt-[42vh]">
                <h2 className="font-[font2] font-bold text-[13vw] uppercase">
                    Projets
                </h2>
            </div>

            <div className="lg:-mt-20 mt-0.1">
                {projects.map((elem, idx) => (

                    <div
                        key={idx}
                        className="hero w-full lg:h-[600px] h-[500px]   mb-3 overflow-hidden"
                    >
                        {/* 👇 Ye inner wrapper yahin add karna hai */}
                        <div className="inner h-full lg:flex flex-2 flex-grow   w-full gap-3">
                            <ProjectCard
                                image1={elem.image1}
                                image2={elem.image2}
                            />
                        </div>
                    </div>

                ))}
            </div>
        </div>


    )
}

export default Projects