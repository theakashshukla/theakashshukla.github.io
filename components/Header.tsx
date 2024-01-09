import { cn } from "@/lib/utils";
// import { m, useAnimationControls } from 'framer-motion';
// import Image from 'next/image';

export default function Header() {
  return (
    <div>
      <div
        className={cn(
          "mb-1 flex items-center gap-1 text-2xl text-slate-600",
          "md:mb-0 md:gap-2 md:text-4xl",
          "dark:text-slate-400"
        )}
      >
        namskaram!
      </div>
      <span className={cn("text-slate-700", "dark:text-slate-300")}>
        <span
          className={cn(
            "mb-4 block text-[2.5rem] font-[1000] leading-none",
            "md:mb-6 md:text-7xl"
          )}
        >
          I&apos;m <strong className="text-violet-500">Akash</strong> Shukla,{" "}
        </span>
        <h1
          className={cn(
            "block text-base text-slate-600",
            "md:text-xl",
            "dark:text-slate-400"
          )}
        >
          <span className={cn("lowercase")}>A</span>{" "}
          <strong
            className={cn(
              "font-bold lowercase text-slate-700",
              "dark:text-slate-300"
            )}
          >
            Full Stack Developer
          </strong>{" "}
          who loves intuitive,{" "}
          <span className={cn("block")}>logic and modern UI design.</span>
        </h1>
      </span>
    </div>
  );
}
