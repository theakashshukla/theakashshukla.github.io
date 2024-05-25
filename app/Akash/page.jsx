export default function AkashResume() {
  return (
    <div>
      <section>
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
                        theakashshukla.vercel.app
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
                        href="tel:+91638601615"
                      >
                        +91 638601615
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
                        href="mailto: theakashshuklaofficial@gmail.com"
                      >
                        theakashshuklaofficial@gmail.com
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
                      <span className="block">
                        Master of Computer Applications: Computer Science
                      </span>
                      <span className="block">
                        Makhanlal Chaturvedi University -Bhopal
                      </span>
                    </dt>
                    <dd className="font-medium text-blue-500">Aug 2021 - June 2023</dd>
                  </div>
                  <div className="flex flex-col gap-2">
                    <dt className="flex flex-col">
                      <span className="block">
                        {" "}
                        Bachelor of Computer Applications: Computer Science
                      </span>
                      <span className="block">Makhanlal Chaturvedi University -Bhopal</span>
                    </dt>
                    <dd className="font-medium text-blue-500">Aug 2018 - June 2021</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Skills
                </h2>
                <ul
                  role="list"
                  className="mt-4 space-y-2 text-sm text-gray-600"
                >
                  <li>Node.Js, NestJs, Express.Js, Redis</li>
                  <li>ReactJs, TailwindCSS, Java, JavaScript, HTML5, CSS3</li>
                  <li>MongoDB, MySQL, Firebase</li>
                  <li>Git/GitHub, Jenkins, Docker, Kubernetes, Ansible, AWS</li>
                  <li>Jest, Graph QL, Redux, JIRA, Postman</li>
                </ul>
              </div>
              {/* <div>
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
              </div> */}
            </div>
            <div className="flex flex-col gap-12 lg:col-span-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  About
                </h2>
                <p className="mt-4 text-sm text-gray-600">
                  As a FullStack Engineer at Indian Robotics Solution Pvt Ltd,
                  my journey has evolved from backend development to mastering
                  full-stack capabilities. With a Master of Computer
                  Applications from Makhanlal Chaturvedi National University, my
                  academic background solidifies my technical proficiency. Our
                  team leverages NestJS, ExpressJs, Jenkins, Ansible, Nginx,
                  VPS, Azure DevOps Services, Github, ReactJs and Tailwind CSS
                  to deliver innovative solutions. My transition from a
                  Freelance Software Engineer to a corporate role has honed my
                  competencies in software and web development. Upholding strong
                  ethical standards, I apply business analytics skills to
                  enhance development processes. The drive to continuously learn
                  and adapt keeps me at the forefront of technological
                  advancements, ensuring robust, scalable software
                  architectures.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Work experience
                </h2>
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="mt-4 text-lg font-medium text-blue-500">
                      Indian Robotics Solutions -
                      <span className="text-gray-500">Full Stack Engineer</span>
                      <span className="block text-xs text-gray-500">
                        January 2024 - Present
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
                      Indian Robotics Solutions -
                      <span className="text-gray-500">
                        Backedn Developer Intern
                      </span>
                      <span className="block text-xs text-gray-500">
                        January 2024 - March 2024
                      </span>
                    </p>
                    <p className="mt-4 text-sm font-medium text-gray-500">
                      Led the development of a robust R&D inventory management
                      API using NestJs, MonogDB, Redis with DTOs, enabling
                      efficient Project Creation, Item Tracking, Item Assign and
                      Status check. Enhanced Various API performance and
                      response times by Implementing Pagination & writing
                      proficient code. Integrate CI/CD using Jenkins and
                      Deployed 9 Project (Frontend, Backend) onto Nginx Servers,
                      Github Webhook and Ansible. Resulting in 600+ hours saved
                      annually through automation.
                    </p>
                  </div>
                  <div>
                    <p className="mt-4 text-lg font-medium text-blue-500">
                      Astreak Technologies -
                      <span className="text-gray-500">Freelancer</span>
                      <span className="block text-xs text-gray-500">
                        March 2023 - December 2023
                      </span>
                    </p>
                    <p className="mt-4 text-sm font-medium text-gray-500">
                      Designed and implemented a streamlined registration
                      system, optimizing the entire student enrollment and
                      admission process. Additionally, integrated Continuous
                      Integration and Continuous Deployment (CI/CD) pipelines to
                      automate code testing, ensuring a reliable and agile
                      development workflow. Utilized advanced data visualization
                      techniques to present essential admission details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <footer>
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
