"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Popu Weekend Club (2025)",
    description: "This project focuses on building the frontend for an Event Ticketing System",
    image: "/popu.png",
    liveLink: "https://www.popuweekendclub.com/",
    skills: ["/stack/HTML.png", "/stack/CSS.png", "/stack/Javascript.svg", "/stack/Tailwind.png", "/stack/Vercel.svg"],
    position: "left",
  },
  {
    id: 2,
    title: "Daycare Umma (2025)",
    description: "This project involves building the frontend interface of the Daycare Umma website.",
    image: "/daycare.png",
    liveLink: "https://daycareumma.vercel.app/",
    skills: ["/stack/HTML.png", "/stack/CSS.png", "/stack/Javascript.svg", "/stack/Tailwind.png", "/stack/Vercel.svg"],
    position: "left",
  },
  {
    id: 3,
    title: "Rama Garage (2024)",
    description: "Rama Garage is a website project for a premium car detailing service based in Jakarta.",
    image: "/garage.png",
    liveLink: "https://ramagarage.vercel.app/",
    skills: ["/stack/HTML.png", "/stack/CSS.png", "/stack/Javascript.svg", "/stack/Vercel.svg"],
    position: "left",
  },
  {
    id: 4,
    title: "SuperKlin (2024)",
    description:
      "This project focuses on designing the visual identity and marketing assets for SuperKlin.",
    image: "/superklin.png",
    liveLink: "https://super-klin.vercel.app/",
    skills: ["/stack/HTML.png", "/stack/CSS.png", "/stack/Javascript.svg", "/stack/Tailwind.png", "/stack/Vercel.svg"],
    position: "left",
  },
]

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const handleProjectClick = (projectId: number) => {
    if (isMobile) {
      setActiveProject(activeProject === projectId ? null : projectId)
    }
  }

  const isProjectActive = (projectId: number) => {
    return hoveredProject === projectId || activeProject === projectId
  }

  return (
    <section id="projects" className="w-full bg-black from-[rgb(11,11,11)] via-[rgb(15,15,15)]  to-black rounded-3xl">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col gap-16 md:gap-24 lg:gap-32 mt-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative w-full md:w-4/5 h-[200px] md:h-[360px] lg:h-[600px] mx-auto rounded-[20px] overflow-visible transition-all duration-1000 ${
                isProjectActive(project.id) ? "shadow-[0_0_1000px_rgba(102,5,53,0.765)]" : ""
              }`}
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project.id)}
            >
              {/* Base Overlay - Always visible */}
              <div className="absolute inset-0 bg-black/10 rounded-[18px] z-0"></div>

              {/* Hover/Active Overlay - Only visible on hover/active */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10 rounded-[18px] transition-all duration-500 origin-left ${
                  isProjectActive(project.id) ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
              ></div>

              {/* Project number - Only visible on hover/active */}
              <div
                className={`absolute -left-16 md:-left-16 ${
                  isMobile ? "text-[50px] -top-5 left-[5%]" : "text-[180px] -top-16"
                } font-semibold text-[rgba(245,217,231,0.506)] z-20 transition-all duration-800 ${
                  isProjectActive(project.id) ? "opacity-100" : "opacity-0"
                }`}
              >
                {project.id.toString().padStart(2, "0")}
              </div>

              {/* Project content - Only visible on hover/active */}
              <div
                className={`absolute left-[5%] bottom-[7%] md:max-w-[80%] z-20 flex flex-col ${
                  isMobile ? "gap-0 p-2" : "gap-4 p-8"
                } text-white transition-all duration-500 ${
                  isProjectActive(project.id)
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-10"
                }`}
              >
                {/* Skills */}
                {/* <div className="flex flex-wrap max-w-[60%] gap-1 md:gap-4">
                  {project.skills.map((skill, index) => (
                    <Image
                      key={index}
                      src={skill || "/placeholder.svg"}
                      alt="Skill"
                      width={isMobile ? 17 : 40}
                      height={isMobile ? 17 : 40}
                      className="object-contain"
                    />
                  ))}
                </div> */}

                {/* Title */}
                <h3
                  className={`${isMobile ? "text-base" : "text-5xl"} font-bold font-['Catamaran',sans-serif] leading-tight`}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className={`${isMobile ? "text-[9px]" : "text-base"} italic w-[70%] opacity-70 rounded-md backdrop-blur-md`}
                >
                  {project.description}
                </p>

                {/* Buttons */}
                <div className={`flex items-center gap-4 ${isMobile ? "mt-1" : "mt-2"}`}>
                  {project.liveLink && (
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <button
                        className={`
                        rounded-full ${isMobile ? "text-[0.5em]" : "text-[0.85rem]"} 
                        font-semibold px-4 py-2 md:px-6 tracking-wider
                        bg-white from-[#9419d2] via-[#dc2430] to-[#9a31cf] 
                        bg-[length:300%] bg-left hover:bg-right text-black
                        transition-all duration-300 hover:scale-95 hover:shadow-[0_0_20px_rgba(33,1,1,0.5)]
                      `}
                      >
                        LIVE LINK
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
