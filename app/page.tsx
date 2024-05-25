import { cn } from "@/lib/utils";
import { Icons } from "../components/icons";


export default function Home() {
  return (
    <div>
      {/* <Header /> */}

      <section>
        <div className="max-w-5xl px-8 py-24 pb-12 mx-auto 2xl:max-w-7xl md:px-lg:px-24 lg:pt-32">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block object-cover w-24 h-48 rounded-full md:w-48 md:h-72 lg:w-64 lg:h-96"
                src="akash.jpg"
                alt="theakashshukla"
              />
            </div>
            <div className="ml-6">
              {/* <div
                className={cn(
                  "mb-1 flex items-center gap-1 text-2xl text-slate-600",
                  "md:mb-0 md:gap-2 md:text-4xl",
                  "dark:text-slate-400"
                )}
              >
                namskaram!
              </div> */}
              <p className="text-3xl font-semibold tracking-tighter text-slate-700 dark:text-slate-300 md:text-5xl lg:text-6xl">
                <span className="text-violet-500">Akash</span> Shukla,
                <span className="block text-gray-500">
                  Full Stack Engineer
                </span>
              </p>
              <h1
                className={cn(
                  "block text-base text-slate-600",
                  "md:text-xl",
                  "dark:text-slate-400"
                )}
              >
                {/* <span className={cn("lowercase")}>A</span>{" "}
                <strong
                  className={cn(
                    "font-bold lowercase text-slate-700",
                    "dark:text-slate-300"
                  )}
                >
                  Full Stack Developer
                </strong>{" "} */}
                who loves intuitive,{" "}
                <span className={cn("block")}>logic and modern UI design.</span>
              </h1>
              <div className="flex mt-12 space-x-6 text-xs text-gray-500 uppercase">
                <a href="#_" className="duration-200 hover:text-gray-400">
                  {/* Twitter */}
                  <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset size ring-yellow-600/20">
      

                  <Icons.twitx className="size-4" />
                  </span>
                </a>
                <a href="#_" className="duration-200 hover:text-gray-400">
                  {/* Linkedin */}
                  <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
  
      
                  <Icons.linkedin className="size-4" />
                  </span>
                </a>
                <a href="#_" className="duration-200 hover:text-gray-400">
                  {/* GitHub */}
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
     
      
                  <Icons.gitHub className="size-4" />
                  </span>
                </a>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="max-w-5xl px-8 py-12 mx-auto 2xl:max-w-7xl md:px-lg:px-24">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Contact
                </h2>
                <dl className="mt-4 space-y-4 text-sm text-gray-600">
                  <div className="flex items-center text-sm text-gray-500 gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Website</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-world"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M3.6 9h16.8"></path>
                        <path d="M3.6 15h16.8"></path>
                        <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                        <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                      </svg>
                    </dt>
                    <dd>
                      <a className="hover:text-gray-900" href="#_">
                        windstatic.com
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-device-mobile"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z"></path>
                        <path d="M11 4h2"></path>
                        <path d="M12 17v.01"></path>
                      </svg>
                    </dt>
                    <dd>
                      <a
                        className="hover:text-gray-900"
                        href="tel:+1 (555) 234-5678"
                      >
                        +1 (555) 234-5678
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-mail"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                        <path d="M3 7l9 6l9 -6"></path>
                      </svg>
                    </dt>
                    <dd>
                      <a
                        className="hover:text-gray-900"
                        href="mailto:hello@example.com"
                      >
                        propath@windstatic.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Education
                </h2>
                <dl className="mt-4 space-y-4 text-sm text-gray-600">
                  <div className="flex flex-col gap-2">
                    <dt className="flex flex-col">
                      <span className="block">Master Computer Engineering</span>
                      <span className="block">UCLA</span>
                    </dt>
                    <dd className="font-medium text-blue-500">2022 - 2023</dd>
                  </div>
                  <div className="flex flex-col gap-2">
                    <dt className="flex flex-col">
                      <span className="block">
                        {" "}
                        Grade Computer Engineering Technology
                      </span>
                      <span className="block">UCLA</span>
                    </dt>
                    <dd className="font-medium text-blue-500">2022 - 2023</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Expertise
                </h2>
                <ul
                  role="list"
                  className="mt-4 space-y-2 text-sm text-gray-600"
                >
                  <li>JavaScript</li>
                  <li>PHP</li>
                  <li>Astro</li>
                  <li>Node</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Skills
                </h2>
                <ul
                  role="list"
                  className="mt-4 space-y-2 text-sm text-gray-600"
                >
                  <li>Lead &amp; Strategy</li>
                  <li>Creative</li>
                  <li>Team Work</li>
                  <li>Goal oriented</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-12 lg:col-span-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  About
                </h2>
                <p className="mt-4 text-sm text-gray-600">
                  Hello, I'm Michael Andreuzza, a passionate web developer
                  dedicated to bringing digital visions to life. With a deep
                  love for coding and a keen eye for design, I specialize in
                  creating immersive web experiences that not only look stunning
                  but also function seamlessly.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Work experience
                </h2>
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="mt-4 text-lg font-medium text-blue-500">
                      XYZ Tech Solutions -
                      <span className="text-gray-500">Web Developer</span>
                      <span className="block text-xs text-gray-500">
                        January 2019 - Present
                      </span>
                    </p>
                    <p className="mt-4 text-sm font-medium text-gray-500">
                      At XYZ Tech Solutions, I lead the development of diverse
                      client websites, ensuring both functionality and
                      aesthetics. Collaborating with design teams, I turn
                      creative concepts into user-friendly, responsive web
                      applications. I've optimized performance, reducing load
                      times by 20% and integrated third-party tools for enhanced
                      functionality. I prioritize client satisfaction through
                      responsive support and maintenance.
                    </p>
                  </div>
                  <div>
                    <p className="mt-4 text-lg font-medium text-blue-500">
                      ABC Creative Agency -
                      <span className="text-gray-500">
                        Front-End Developer Intern
                      </span>
                      <span className="block text-xs text-gray-500">
                        June 2018 - December 2018
                      </span>
                    </p>
                    <p className="mt-4 text-sm font-medium text-gray-500">
                      As a Front-End Developer Intern at ABC Creative Agency, I
                      honed my skills in HTML, CSS, and JavaScript, contributing
                      to client projects. I focused on responsive design,
                      cross-browser compatibility, and troubleshooting. My
                      internship sparked a passion for crafting outstanding
                      digital experiences.
                    </p>
                  </div>
                  <div>
                    <p className="mt-4 text-lg font-medium text-blue-500">
                      Digital Innovations -
                      <span className="text-gray-500">Web Developer</span>
                      <span className="block text-xs text-gray-500">
                        March 2020 - March 2022
                      </span>
                    </p>
                    <p className="mt-4 text-sm font-medium text-gray-500">
                      At Digital Innovations, I've led web development projects
                      with a focus on user-friendly, responsive design. I've
                      collaborated with design teams to bring creative concepts
                      to life and integrated third-party tools for enhanced
                      functionality. My dedication to performance optimization
                      has improved load times and overall site performance. I
                      also provide ongoing support to ensure client
                      satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="max-w-5xl px-8 py-12 mx-auto 2xl:max-w-7xl md:px-lg:px-24 lg:pt-48">
          <p className="max-w-2xl text-sm text-left text-gray-500">
            © Windstatic. Design:
            <a href="#_/" className="underline underline-offset-2">
              Wind Basic
            </a>
            . Demo Images: Respective owners.
          </p>
        </div>
      </footer> */}
    </div>
  );
}
