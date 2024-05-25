import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

export default function Header() {
  return (
    <div>
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
                <span className="block text-gray-500">Full Stack Engineer</span>
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
                    <Icons.twitx className="size-6" />
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
                    <Icons.github className="size-4" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
