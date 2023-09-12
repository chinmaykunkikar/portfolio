"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import fetcher from "src/lib/fetcher";
import useSWR from "swr";
import { twMerge } from "tailwind-merge";

type commitSHA = {
  sha: string;
};

export default function Navbar() {
  const pathname = usePathname();
  const FIRST_COMMIT_SHA = "5b77381";

  const tabs = [
    { id: "home", label: "Home", link: "/" },
    { id: "about", label: "About", link: "/about" },
    // { id: "projects", label: "Projects", link: "/projects" },
    { id: "contact", label: "Contact", link: "/contact" },
  ];

  const cursorVariants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1 },
  };

  const { data, isLoading } = useSWR<commitSHA>(
    "/api/last-commit-sha",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  const lastCommitSHA = data?.sha || FIRST_COMMIT_SHA;

  return (
    <nav className="flex flex-col items-center justify-between gap-4 px-8 py-6 text-neutral-700 md:px-20 lg:flex-row lg:gap-0 lg:px-40">
      <span className="md:text-lg">
        <h3 className="cursor-default	select-none font-mono">
          <span>[chinmay@web </span>
          <Link
            className={twMerge(
              "font-bold transition-opacity duration-1000 hover:text-neutral-500",
              isLoading ? "blur-sm" : "",
            )}
            href="https://github.com/chinmaykunkikar/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            {lastCommitSHA}
          </Link>
          <span>]$&#8202;</span>
          <motion.span
            className="pointer-events-none"
            variants={cursorVariants}
            initial="hidden"
            animate="visible"
            transition={{
              repeat: Infinity,
              duration: 0.8,
              repeatType: "reverse",
            }}
          >
            &#9601;
          </motion.span>
        </h3>
      </span>
      <div className="flex h-fit items-center gap-1 lowercase md:gap-8">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={tab.link}
              passHref
              className={twMerge(
                pathname === tab.link ? "" : "hover:text-neutral-800/50",
                "relative rounded-xl px-3 py-2 text-neutral-500 transition focus-visible:outline-2",
              )}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {pathname === tab.link && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 rounded-xl bg-neutral-900 mix-blend-difference"
                  transition={{
                    type: "spring",
                    bounce: 0.3,
                    duration: 0.4,
                  }}
                />
              )}
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
