"use client";
import fetcher from "@lib/fetcher";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
    <nav className="text-type flex flex-col items-center justify-between gap-4 px-8 py-6 md:px-20 lg:flex-row lg:gap-0 lg:px-40">
      <span className="md:text-lg">
        <h3 className="cursor-default	select-none font-mono">
          <span>[chinmay@web </span>
          <Link
            className={twMerge(
              "hover:text-type-hover font-bold transition-opacity duration-1000",
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
                pathname === tab.link ? "" : "hover:text-type-hover",
                "text-type relative rounded-xl px-3 py-2 transition focus-visible:outline-2",
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
                    type: "tween",
                    ease: "anticipate",
                    duration: 0.5,
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
