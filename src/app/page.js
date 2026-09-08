"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let currentSection = activeSection;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const offset = window.innerHeight / 2;

        if (window.scrollY >= sectionTop - offset && window.scrollY < sectionTop + sectionHeight - offset) {
          currentSection = section.getAttribute("id");
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="__variable_20b187 group/spotlight relative">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <div className="rounded-full overflow-hidden flex items-center justify-center relative">
                <Image src="/profile.jpg" alt="Picture of Me" width={200} height={250} className="object-cover rounded-full mr-[80px] mb-6" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                Maynard Rey Rosales
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Associate Software Engineer
              </h2>
              <p className="mt-4 max-w-[30vw] leading-normal">
                A motivated website and mobile app developer experienced in team collaboration to plan 
                and internalize corporate web presence, loves embracing challenging projects mandating 
                detailed coding changes, search engine related considerations and security.
              </p>
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-8 w-max">
                  <li>
                    <a className={`group flex items-center py-3 ${ activeSection === "about" ? "active" : "" }`} href="#about">
                      <span
                        className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all
                        ${activeSection === "about" ? "w-16 bg-slate-200" : ""}
                        group-hover:w-16 group-hover:bg-slate-200 
                        group-focus-visible:w-16 group-focus-visible:bg-slate-200 
                        motion-reduce:transition-none`}
                      ></span>
                      <span
                        className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500
                        ${activeSection === "about" ? "text-slate-200" : ""}
                        group-hover:text-slate-200 group-focus-visible:text-slate-200`}
                      >
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className={`group flex items-center py-3 ${ activeSection === "experience" ? "active" : "" }`} href="#experience">
                      <span
                        className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all
                          ${activeSection === "experience" ? "w-16 bg-slate-200" : ""}
                          group-hover:w-16 group-hover:bg-slate-200 
                          group-focus-visible:w-16 group-focus-visible:bg-slate-200 
                          motion-reduce:transition-none`}
                      ></span>
                      <span
                        className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500
                          ${activeSection === "experience" ? "text-slate-200" : ""}
                          group-hover:text-slate-200 group-focus-visible:text-slate-200`}
                      >
                        Experience
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className={`group flex items-center py-3 ${ activeSection === "projects" ? "active" : "" }`} href="#projects">
                      <span
                        className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all
                        ${activeSection === "projects" ? "w-16 bg-slate-200" : ""}
                        group-hover:w-16 group-hover:bg-slate-200 
                        group-focus-visible:w-16 group-focus-visible:bg-slate-200 
                        motion-reduce:transition-none`}
                      ></span>
                      <span
                        className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500
                        ${activeSection === "projects" ? "text-slate-200" : ""}
                        group-hover:text-slate-200 group-focus-visible:text-slate-200`}
                      >
                        Projects
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex space-x-4 mt-[5vh]">
              <a href="https://www.linkedin.com/in/maynard-rey-rosales-41065a136/" target="_blank" className="text-white-700 hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/maynrey/" target="_blank" className="text-white-700 hover:text-pink-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </header>
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About Me"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  About
                </h2>
              </div>
              <div>
                <p className="mb-4">
                  1I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
                </p>
                <p className="mb-4">
                  Currently, I\'m a Senior Front-End Engineer at Klaviyo, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo’s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.
                </p>
                <p className="mb-4">
                  In the past, I\'ve had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API.
                </p>
                <p>
                In my spare time, I’m usually climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.
                </p>
              </div>
            </section>
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Experience"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  About
                </h2>
              </div>
              <div>
                <p className="mb-4">
                  Back in 2012, I decided to try my hand at creating custom
                  Tumblr themes and tumbled head first into the rabbit hole of
                  coding and web development. Fast-forward to today, and Ive had
                  the privilege of building software for an{" "}
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://us.mullenlowe.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="advertising agency (opens in a new tab)"
                  >
                    advertising agency
                  </a>
                  , a{" "}
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://starry.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="start-up (opens in a new tab)"
                  >
                    start-up
                  </a>
                  , a{" "}
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.apple.com/apple-music/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="huge corporation (opens in a new tab)"
                  >
                    huge corporation
                  </a>
                  , and a{" "}
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://upstatement.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="digital product studio (opens in a new tab)"
                  >
                    digital product studio
                  </a>
                  .
                </p>
                <p className="mb-4">
                  My main focus these days is building accessible user
                  interfaces for our customers at{" "}
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.klaviyo.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Klaviyo (opens in a new tab)"
                  >
                    Klaviyo
                  </a>
                  . I most enjoy building software in the sweet spot where
                  design and engineering meet — things that look good but are
                  also built well under the hood. In my free time, Ive also
                  released an{" "}
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.newline.co/courses/build-a-spotify-connected-app"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="online video course (opens in a new tab)"
                  >
                    online video course
                  </a>{" "}
                  that covers everything you need to know to build a web app
                  with the Spotify API.
                </p>
                <p>
                  When Im not at the computer, Im usually rock climbing,
                  reading, hanging out with my wife and two cats, or running
                  around Hyrule searching for{" "}
                  <span className="group/korok inline-flex lg:cursor-[url('/images/koroks/Elma.png'),_pointer] lg:font-medium lg:text-slate-200">
                    <span className="sr-only">Korok seeds</span>
                    <span
                      className="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]"
                      aria-hidden="true"
                    >
                      K
                    </span>
                    <span
                      className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]"
                      aria-hidden="true"
                    >
                      o
                    </span>
                    <span
                      className="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]"
                      aria-hidden="true"
                    >
                      r
                    </span>
                    <span
                      className="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]"
                      aria-hidden="true"
                    >
                      o
                    </span>
                    <span
                      className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]"
                      aria-hidden="true"
                    >
                      k
                    </span>
                    <span
                      className="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]"
                      aria-hidden="true"
                    >
                      &nbsp;
                    </span>
                    <span
                      className="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]"
                      aria-hidden="true"
                    >
                      s
                    </span>
                    <span
                      className="group-hover/korok:text-sky-400 transition duration-75 group-hover/korok:-translate-y-px delay-[225ms]"
                      aria-hidden="true"
                    >
                      e
                    </span>
                    <span
                      className="group-hover/korok:text-blue-400 transition duration-75 group-hover/korok:-translate-y-px delay-[250ms]"
                      aria-hidden="true"
                    >
                      e
                    </span>
                    <span
                      className="group-hover/korok:text-indigo-400 transition duration-75 group-hover/korok:-translate-y-px delay-[275ms]"
                      aria-hidden="true"
                    >
                      d
                    </span>
                    <span
                      className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
                      aria-hidden="true"
                    >
                      s
                    </span>
                  </span>
                  .
                </p>
              </div>
            </section>
            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Projects"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  About
                </h2>
              </div>
              <div>
                <p className="mb-4">
                  Back in 2012, I decided to try my hand at creating custom
                  Tumblr themes and tumbled head first into the rabbit hole of
                  coding and web development. Fast-forward to today, and Ive had
                  the privilege of building software for an{" "}
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://us.mullenlowe.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="advertising agency (opens in a new tab)"
                  >
                    advertising agency
                  </a>
                  , a{" "}
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://starry.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="start-up (opens in a new tab)"
                  >
                    start-up
                  </a>
                  , a{" "}
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.apple.com/apple-music/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="huge corporation (opens in a new tab)"
                  >
                    huge corporation
                  </a>
                  , and a{" "}
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://upstatement.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="digital product studio (opens in a new tab)"
                  >
                    digital product studio
                  </a>
                  .
                </p>
                <p className="mb-4">
                  My main focus these days is building accessible user
                  interfaces for our customers at{" "}
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.klaviyo.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Klaviyo (opens in a new tab)"
                  >
                    Klaviyo
                  </a>
                  . I most enjoy building software in the sweet spot where
                  design and engineering meet — things that look good but are
                  also built well under the hood. In my free time, Ive also
                  released an{" "}
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.newline.co/courses/build-a-spotify-connected-app"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="online video course (opens in a new tab)"
                  >
                    online video course
                  </a>{" "}
                  that covers everything you need to know to build a web app
                  with the Spotify API.
                </p>
                <p>
                  When Im not at the computer, Im usually rock climbing,
                  reading, hanging out with my wife and two cats, or running
                  around Hyrule searching for{" "}
                  <span className="group/korok inline-flex lg:cursor-[url('/images/koroks/Elma.png'),_pointer] lg:font-medium lg:text-slate-200">
                    <span className="sr-only">Korok seeds</span>
                    <span
                      className="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]"
                      aria-hidden="true"
                    >
                      K
                    </span>
                    <span
                      className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]"
                      aria-hidden="true"
                    >
                      o
                    </span>
                    <span
                      className="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]"
                      aria-hidden="true"
                    >
                      r
                    </span>
                    <span
                      className="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]"
                      aria-hidden="true"
                    >
                      o
                    </span>
                    <span
                      className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]"
                      aria-hidden="true"
                    >
                      k
                    </span>
                    <span
                      className="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]"
                      aria-hidden="true"
                    >
                      &nbsp;
                    </span>
                    <span
                      className="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]"
                      aria-hidden="true"
                    >
                      s
                    </span>
                    <span
                      className="group-hover/korok:text-sky-400 transition duration-75 group-hover/korok:-translate-y-px delay-[225ms]"
                      aria-hidden="true"
                    >
                      e
                    </span>
                    <span
                      className="group-hover/korok:text-blue-400 transition duration-75 group-hover/korok:-translate-y-px delay-[250ms]"
                      aria-hidden="true"
                    >
                      e
                    </span>
                    <span
                      className="group-hover/korok:text-indigo-400 transition duration-75 group-hover/korok:-translate-y-px delay-[275ms]"
                      aria-hidden="true"
                    >
                      d
                    </span>
                    <span
                      className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
                      aria-hidden="true"
                    >
                      s
                    </span>
                  </span>
                  .
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
