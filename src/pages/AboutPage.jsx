import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { initAboutAnimation } from "../animations/aboutAnimation";
import profileImage from "../assets/images/profile.jpeg";
import webDevelopmentVideo from "../assets/videos/1.mp4"
import uiUxVideo from "../assets/videos/2.mp4"
import creativeDevelopmentVideo from "../assets/videos/3.mp4"


const AboutPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const cleanup = initAboutAnimation(
      pageRef.current
    );

    return cleanup;
  }, []);

  return (
    <main ref={pageRef} className="min-h-screen overflow-hidden bg-[#050505] text-white">

      <section className=" about-intro px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-25 lg:px-16 lg:pt-30">

        <div className=" mb-16 flex items-center gap-4 md:mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            01
          </span>
          <span className=" h-px w-12 bg-white/20" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            About me
          </span>
        </div>

        <div className="about-intro-text max-w-[1500px]">

          <p className=" text-[clamp(2.8rem,6vw,7rem)] font-normal leading-[1.05] tracking-[-0.055em]">

            <span className="about-word">
              Hi
            </span>{" "}

            <span className="about-word">
              there,
            </span>{" "}

            <span className="about-word">
              my
            </span>{" "}

            <span className="about-word">
              name
            </span>{" "}

            <span className="about-word">
              is
            </span>{" "}

            <span className="about-word text-white">
              Jayesh
            </span>{" "}

            <span className="about-word text-white">
              Chaudhari.
            </span>{" "}

            <span className="about-word">
              I
            </span>{" "}

            <span className="about-word">
              am
            </span>{" "}

            <span className="about-word">
              a
            </span>{" "}

            <span className="about-word text-white/40">
              creative
            </span>{" "}

            <span className=" about-word text-white/40">
              web
            </span>{" "}

            <span className="about-wordtext-white/40">
              developer
            </span>{" "}

            <span className="about-word">
              focused
            </span>{" "}

            <span className="about-word">
              on
            </span>{" "}

            <span className="about-word">
              building
            </span>{" "}

            <span className="about-word text-white/40">
              modern,
            </span>{" "}

            <span className="about-word">
              interactive
            </span>{" "}

            <span className="about-word">
              and
            </span>{" "}

            <span className="about-word">
              meaningful
            </span>{" "}

            <span className="about-word text-white/40">
              digital
            </span>{" "}

            <span className="about-word text-white/40">
              experiences.
            </span>
          </p>
        </div>
      </section>

      <section className="grid gap-12 border-t border-white/10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-2 lg:px-16">

        <div className="flex items-center justify-center lg:justify-start">

          <div className=" about-image relative aspect-[4/5] w-full max-w-[480px]  overflow-hidden  bg-[#111]">
            <img src={profileImage} alt="Jayesh Chaudhari" className=" h-full w-full object-cover grayscale transition-all  duration-700 hover:scale-[1.03] hover:grayscale-0 " />
          </div>

        </div>

        <div className="flex flex-col justify-center">

          <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-white/30">
            A little about me
          </p>


          <h2 className="about-heading max-w-xl text-3xl font-normal leading-[1.05] tracking-[-0.04em]md:text-5xl">
            I enjoy creating things
            that live on the web.
          </h2>


          <p className="about-description mt-8 max-w-xl text-base leading-7text-white/40">
            My journey started with curiosity about
            how websites work and gradually turned
            into a passion for building them.

            <br />
            <br />

            Today I work mainly with React,
            JavaScript and modern frontend
            technologies while exploring animation,
            interaction and UI/UX design.
          </p>


          <a href="/work" className=" group mt-10  flex w-fit items-center gap-3 border-b border-white/30 pb-2 text-sm  text-white transition-all duration-300 hover:gap-5 hover:border-white" >

            Explore my work
            <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </section>


      <section className="education-section border-t border-white/10 px-6 py-16 md:px-10 md:py-24 lg:px-16 ">
        <SectionLabel number="02" title="Education" />

        <div className="mt-12">

          <div className=" education-item grid gap-6 border-t border-white/10 py-8 md:grid-cols-[70px_1fr_auto] md:items-start "  >

            <span className=" text-xs tracking-wider text-white/30" >
              01
            </span>

            <div>
              <h3 className="text-3xl font-normal tracking-[-0.04em] text-white  md:text-5xl">
                MIT-ADT University
              </h3>

              <p className=" mt-3 text-base text-white/50 md:text-lg">
                B.Tech — Computer Science & Engineering
              </p>

            </div>

            <span className="text-sm text-white/35 md:pt-2">
              2023 — 2026
            </span>

          </div>

          <div className=" education-item grid gap-6 border-t border-white/10 py-8 md:grid-cols-[70px_1fr_auto] md:items-start">

            <span className=" text-xs tracking-wider text-white/30">
              02
            </span>

            <div>

              <h3 className="text-3xl font-normal tracking-[-0.04em] text-white md:text-5xl">
                R.C.Patel Polytechnic
              </h3>

              <p className=" mt-3 text-base text-white/50 md:text-lg">
                Diploma — Computer Science & Engineering
              </p>

            </div>

            <span className="text-sm text-white/35 md:pt-2">
              2020 — 2023
            </span>

          </div>
        </div>
      </section>


      <section className="services-section border-t border-white/10 px-6  py-16 md:px-10 md:py-24 lg:px-16">
        <SectionLabel
          number="03"
          title="What I do"
        />

        <div className="mt-12">

          <Service number="01" title="Web Development" description=" Building modern, fast and scalable websites using React, JavaScript and modern frontend technologies."
            video={webDevelopmentVideo}
          />

          <Service number="02" title="UI / UX Design" description=" Designing clean and intuitive interfaces with focus on usability, visual hierarchy and interaction."
            video={uiUxVideo}
          />

          <Service  number="03" title="Creative Development" description="Creating interactive experiences
        with GSAP, animations and meaningful motion."
            video={creativeDevelopmentVideo}
          />

        </div>
      </section>
    </main>
  );
};


const SectionLabel = ({
  number,
  title,
}) => {

  return (
    <div className=" flex items-center gap-4">

      <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
        {number}
      </span>

      <span className=" h-px w-12 bg-white/20" />

      <span className="text-[10px] uppercase tracking-[0.3em] text-white/30" >
        {title}
      </span>

    </div>
  );
};



const Service = ({
  number,
  title,
  description,
  video,
}) => {

  const videoRef = useRef(null);

  const handleMouseEnter = () => {

    const videoElement =
      videoRef.current;

    if (!videoElement) return;

    if (!videoElement.src) {
      videoElement.src = video;
      videoElement.load();
    }

    videoElement.play().catch(() => { });
  };


  const handleMouseLeave = () => {

    const videoElement =
      videoRef.current;

    if (!videoElement) return;

    videoElement.pause();

    videoElement.removeAttribute("src");

    videoElement.load();
  };


  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="service-item group grid gap-5 border-t border-white/10 py-8 transition-colors duration-300 md:grid-cols-[70px_35%_1fr] md:items-center " >

      <span className=" text-xs text-white/30 transition-colors duration-300 group-hover:text-white">
        {number}
      </span>

      <h3 className="text-3xl font-normal tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-2 md:text-5xl" >
        {title}
      </h3>

      <div className=" flex items-center justify-between gap-8">

        <p className=" max-w-lg whitespace-pre-line text-sm leading-6 text-white/40" >
          {description}
        </p>


        {/* VIDEO */}

        <div className=" relative h-20 w-32 shrink-0 overflow-hidden rounded-md border border-white/10 bg-white/5 opacity-70 transition-all duration-500 group-hover:h-28 group-hover:w-44 group-hover:opacity-100 ">

          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="none"
            className=" h-full w-full object-cover" />

          <div className="pointer-events-none absolute inset-0flex items-center justify-center bg-black/20
              opacity-100 transition-opacity duration-300 group-hover:opacity-0">

            <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm ">
              Hover
            </span>

          </div>
        </div>
      </div>
    </div>
  );
};


export default AboutPage;