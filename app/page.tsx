"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Footer from "../components/magicui/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextReveal } from "@/components/magicui/about";
import ProjectsSection from "@/components/magicui/project";
import LoadingScreen from "@/components/magicui/loading-screen";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // Create refs for the container, starting element, and target element
  const containerRef = useRef<HTMLElement | null>(null);
  const fromRef = useRef<HTMLElement | null>(null);
  const toRef = useRef<HTMLElement | null>(null);
  const pinnedRef = useRef<HTMLDivElement | null>(null);
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";

      // Initialize animations after loading is complete
      // Pinning animation
      gsap.to(pinnedRef.current, {
        scrollTrigger: {
          trigger: pinnedRef.current,
          start: "top top",
          end: "+=800", // Pin for 500px of scrolling
          pin: true,
          pinSpacing: false,
        },
      });

      // Parallax animation
      gsap.to(parallaxRef.current, {
        y: -100, // Move up by 100px
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true, // Smooth scrubbing effect
        },
      });
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "";
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isLoading]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {/* HEADER */}
      <header className="bg-black50/60 backdrop-blur-md fixed top-0 left-0 w-full z-40 md:py-1 right-">
        <nav className="flex justify-between items-center">
          <div className="flex justyfy-start">
            <a
              href="#about"
              className="text-black text-xs rounded hidden md:block justify-start mx-4 tracking-widest relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full "
            >
              ABOUT
            </a>
            <a
              href="#project"
              className="text-black text-xs rounded hidden md:block justify-start mx-4 tracking-widest relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              PROJECT
            </a>
          </div>

          <div className="w-full flex justify-start md:justify-center ml-3 mt-4 md:mt-0 ">
            <Image
              src="/logo.png"
              alt="Rama Rahman"
              width={300}
              height={100}
              className="w-40 md:w-52 h-auto"
              priority
            />
          </div>

          <div className="flex justyfy-start">
            <a
              href="#style"
              className="text-black text-xs rounded hidden md:block justify-start mx-4 tracking-widest relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              TERMS
            </a>
            <a
              href="#contact"
              className="text-black text-xs rounded hidden md:block justify-start mx-4 tracking-widest relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              CONTACT
            </a>
          </div>

          <div className="flex md:hidden mt-4">
            <button
              onClick={toggleMenu}
              className="text-black mr-3 rounded focus:outline-none hover:bg-gray-300"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={` left-0 w-full bg-white custom-backdrop text-black text-6xl fixed  ${
              isMenuOpen ? "flex" : "hidden"
            } flex-col p-4 py-[111px] custom-menu z-50 mt-[800px] `}
          >
            <a
              href="#tagline"
              className="py-2.5 rounded flex justify-between items-center transition-transform transform0 hover:scale-105 active:scale-95"
              onClick={toggleMenu}
            >
              <span className="flex items-center ">
                Home
                <span className="text-red-500 text-base ml-4 mb-10">01</span>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-12 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
            <a
              href="#about"
              className="py-2.5 rounded flex justify-between items-center transition-transform transform0 hover:scale-105 active:scale-95"
              onClick={toggleMenu}
            >
              <span className="flex items-center ">
                About
                <span className="text-red-500 text-base ml-4 mb-10">02</span>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-12 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
            <a
              href="#project"
              className="py-2 rounded flex justify-between items-center transition-transform transform hover:scale-105 active:scale-95"
              onClick={toggleMenu}
            >
              <span className="flex items-center">
                Project
                <span className="text-red-500 text-sm ml-4 mb-10">03</span>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-12 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
            <a
              href="#style"
              className="py-2 rounded flex justify-between items-center transition-transform transform hover:scale-105 active:scale-95"
              onClick={toggleMenu}
            >
              <span className="flex items-center">
                Terms
                <span className="text-red-500 text-sm ml-4 mb-10">04</span>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-12 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
            <p className="text-center text-sm mt-36 mb-5">
              ©️ 2024 Cretivox Creative Community
            </p>
          </div>
        </nav>
        <div className="h-px bg-black w-full md:hidden mt-4"></div>
      </header>
      <div className="text-white text-xs text-center absolute bottom-2 left-0 right-0 py-4 cursor-pointer z-30">
        <button
          onClick={() => {
            console.log("Scroll Down button clicked");
            window.scrollBy({
              top: window.innerHeight * 1.2,
              behavior: "smooth",
            });
          }}
          className="group relative inline-flex items-center overflow-hidden bg-black px-3 py-1 text-white font-semibold focus:outline-none focus:ring rounded-full"
        >
          Scroll Down
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 ml-2"
            fill="none"
            viewBox="0 0 30 30"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      {/* END HEADER */}

      {/* TAGLINE */}
      <section
        id="tagline"
        className="min-h-screen w-full md:max-w-full flex flex-col justify-center items-center overflow-hidden relative"
      >
        {/* Blue shape image positioned as a background for the tagline */}
        <div className="absolute right-[-7%] md:right-[1%] top-[14%] w-[200px] h-[200px] md:w-[450px] md:h-[450px] z-0">
          <Image
            src="/blue-shape.png"
            alt="Blue 3D shape"
            width={450}
            height={450}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute left-[-5%] md:left-[1%] top-[8%] w-[200px] h-[200px] md:w-[350px] md:h-[350px] z-0">
          <Image
            src="/gantungan.png"
            alt="Keychain"
            width={300}
            height={300}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute left-[5%] md:left-[10%] bottom-[20%] w-[200px] h-[100px] md:w-[200px] md:h-[200px] z-0">
          <Image
            src="/hardisk.png"
            alt="Memory card"
            width={300}
            height={300}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute right-[2%] md:right-[10%] bottom-[20%] w-[100px] h-[100px] md:w-[200px] md:h-[200px] z-0">
          <Image
            src="/kaset.png"
            alt="Cassette tape"
            width={300}
            height={300}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-5xl md:text-8xl text-black font-black text-left mix-blend-multiply">
            CREATIVE
          </h2>
        </div>
        <div className="relative z-10">
          <h2 className="text-5xl md:text-8xl text-black font-black text-left">
            FRONT-END
          </h2>
        </div>
        <div className="relative z-10">
          <h2 className="text-5xl md:text-8xl text-black font-black text-left">
            DEVELOPER
          </h2>
        </div>
      </section>
      {/* END TAGLINE */}

      {/* VIDEO */}
      <section className="min-h-screen w-full flex justify-center items-center overflow-hidden relative">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          suppressHydrationWarning
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/intro2.mp4" type="video/mp4" />
        </video>
      </section>

      {/* END VIDEO */}

      {/* Rest of the page content remains the same */}
      {/* About */}
      <section id="about" className="bg-black rounded-b-3xl">
        <TextReveal>
          A passionate Front End Developer who loves crafting beautiful,
          responsive, and user friendly web experiences. With a strong
          foundation in HTML, CSS, JavaScript, and TypeScript modern frameworks
          like ReactJS and NextJS, I bring designs to life with smooth
          interactions and seamless functionality.
        </TextReveal>
      </section>
      {/* End About */}

      {/* Cover Project */}
      <section
        ref={pinnedRef}
        id="project"
        className="relative bg-[#ffffff] flex flex-col"
      >
        <div className="flex-1 container mx-auto px-4 pt-8 min-h-screen w-full md:max-w-full">
          <div className="flex justify-between items-start">
            <span className="text-xs uppercase tracking-widest font-light">
              Some
              <br />
              Selected
            </span>
            <span className="text-xs uppercase tracking-widest font-light text-right">
              Front End
              <br />
              UI and UX
            </span>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <h1 className="text-center">
              <span className="block text-[12vw] md:text-[10vw] leading-none font-light tracking-tight"></span>
              <span className="block text-[12vw] md:text-[10vw] leading-none font-bold tracking-tight -mt-[0.2em]">
                .PROJECTS
              </span>
            </h1>
            <p className="mt-8 text-xs uppercase tracking-widest text-center leading-relaxed">
              Customer Projects, Personal Projects,
              <br />
              Some Research and Playground.
            </p>
          </div>
        </div>
        <div className="pb-12 flex justify-center">
          <div className="flex flex-col items-center gap-0">
            <button
              onClick={() =>
                window.scrollBy({
                  top: window.innerHeight * 0.9,
                  behavior: "smooth",
                })
              }
              className=""
            >
              <span className="text-xl">
                ( <span className="text-sm">↓</span> )
              </span>
            </button>
          </div>
        </div>
      </section>
      {/* End Project */}

      {/* Projects  */}
      <section ref={parallaxRef} className="min-h-screen">
        <ProjectsSection />
      </section>
      {/* End Projects */}

      {/* Velocity */}
      <VelocityScroll
        text="FRONT END DEVELOPER  •  "
        default_velocity={4}
        className="font-display text-center text-2xl font-black tracking-[-0.02em] text-white bg-yellow-300 drop-shadow-sm dark:text-white md:text-6xl md:leading-[5rem]"
      />
      {/* End Velocity */}

      {/* Style */}
      <section
        id="style"
        className="w-full max-w-full py-14 mx-auto p-6 grid gap-8 md:grid-cols-2 bg-white"
      >
        {/* Colors Section */}
        <div className="space-y-6">
          <h3 className="text-4xl font-semibold mb-4">../Colors ...</h3>
          <div className="prose dark:prose-invert">
            <p className="text-muted-foreground text-1xl">
              For this project, i chose two main colors -{" "}
              <span className="font-medium text-foreground italic">
                black and white
              </span>
              , accompanied by two shades of gray.{" "}
              <span className="font-medium text-foreground italic">
                These colors highlight professionalism, cleanliness, and status.
              </span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {/* Color Swatches */}
            <div className="space-y-4">
              <div className="h-32 bg-[#a6a6a6] rounded-lg flex items-end p-3">
                <span className="text-white font-mono">#a6a6a6</span>
              </div>
              <div className="h-32 bg-[#121212] rounded-lg flex items-end p-3">
                <span className="text-white font-mono">#121212</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-32 bg-[#363636] rounded-lg flex items-end p-3">
                <span className="text-white font-mono">#363636</span>
              </div>
              <div className="h-32 bg-[#f5f5f5] rounded-lg flex items-end p-3 border border-gray-200">
                <span className="text-gray-600 font-mono">#f5f5f5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Typography Section */}
        <div className="space-y-6">
          <h2 className="text-6xl font-bold mb-8">Typography</h2>
          <div className="prose dark:prose-invert">
            <p className="text-muted-foreground text-1xl">
              I used the{" "}
              <span className="font-medium text-foreground">
                Arial, Helvetica, and sans-serif fonts
              </span>{" "}
              for optimal readability and a clean, professional appearance.
              Arial provides a balanced and modern feel suitable for various
              interfaces, while Helvetica enhances clarity and legibility across
              different screen sizes.
            </p>
          </div>
        </div>
      </section>
      {/* End Style */}

      {/* Profesional Skills */}

      {/* End Profesional Skills */}

      {/* Footer */}
      <footer id="contact" className="">
        <Footer />
      </footer>
      {/* End Footer */}
    </>
  );
}
