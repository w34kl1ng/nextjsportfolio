import Image from "next/image"

export default function Home() {
  return (
    <div className="__variable_20b187 group/spotlight relative">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">Maynard Manyak</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Senior Senior Senior
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I build pixel-perfect, engaging, and accessible digital
                experiences.
              </p>
              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-16 w-max">
                  <li>
                    <a
                      className="group flex items-center py-3 active"
                      href="#about"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3"
                      href="#experience"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Experience
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3"
                      href="#projects"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Projects
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About me"
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
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About me"
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
              aria-label="About me"
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
