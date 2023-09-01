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

  const { data, isLoading } = useSWR<commitSHA>(
    "/api/last-commit-sha",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
  const lastCommitSHA = data?.sha;

  const tabs = [
    { id: "home", label: "Home", link: "/" },
    { id: "about", label: "About", link: "/about" },
    { id: "projects", label: "Projects", link: "/projects" },
    { id: "contact", label: "Contact", link: "/contact" },
  ];

  return (
    <>
      <nav className="flex flex-col items-center justify-between gap-4 px-12 py-8 text-neutral-700 md:px-20 lg:flex-row lg:gap-0 lg:px-32">
        <span className="md:text-lg">
          <h3 className="cursor-default	select-none	font-mono">
            [chinmay@web{" "}
            <a
              className={twMerge(
                "font-bold transition-opacity duration-700 hover:text-neutral-500",
                isLoading ? "animate-fadeIn opacity-0" : "opacity-100",
              )}
              href="https://github.com/chinmaykunkikar/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              {lastCommitSHA}
            </a>
            ]$&#8202;
            <span className="animate-pulse">&#9601;</span>
          </h3>
        </span>
        <div className="flex h-fit items-center gap-1 md:gap-8">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                href={tab.link}
                passHref
                className={twMerge(
                  pathname === tab.link ? "" : "hover:text-neutral-800/70",
                  "relative rounded-xl px-4 py-2 text-sm text-neutral-500 transition focus-visible:outline-2",
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
                      bounce: 0.2,
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
    </>
  );
}
