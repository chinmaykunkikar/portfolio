"use client";

import Button from "@components/Button";
import { getLatestCommitSHA } from "@lib/github";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type LinkWrapperProps = {
  children: string | JSX.Element | JSX.Element[];
  linkHref: string;
  otherClasses?: string;
  [props: string]: any;
};

export default function Navbar() {
  const pathname = usePathname();

  const FIRST_COMMIT_SHA = "5b77381";

  const [commitSHA, setCommitSHA] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCommitSHA() {
      const sha = await getLatestCommitSHA();
      if (sha) setCommitSHA(sha);
      else setCommitSHA(FIRST_COMMIT_SHA);
      setIsLoading(false);
    }

    fetchCommitSHA();
  }, []);

  function LinkWrapper({
    children,
    linkHref,
    otherClasses,
    ...props
  }: LinkWrapperProps) {
    const activeLink = pathname === linkHref;
    return (
      <Link href={linkHref} className={otherClasses} passHref>
        <span className={activeLink ? "text-neutral-500" : ""} {...props}>
          {children}
        </span>
      </Link>
    );
  }

  return (
    <>
      <nav className="flex flex-col items-center justify-between gap-4 px-12 py-8 text-neutral-700 md:px-20 lg:flex-row lg:gap-0 lg:px-32">
        <span className="text-xl">
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
              {commitSHA}
            </a>
            ]$&#8202;
            <span className="animate-pulse">&#9601;</span>
          </h3>
        </span>
        <div className="flex h-fit items-center gap-1 md:gap-8">
          <LinkWrapper linkHref="/">
            <Button>Home</Button>
          </LinkWrapper>
          <LinkWrapper linkHref="/about">
            <Button>About</Button>
          </LinkWrapper>
          <LinkWrapper linkHref="/projects">
            <Button>Projects</Button>
          </LinkWrapper>
          <LinkWrapper linkHref="/contact">
            <Button>Contact</Button>
          </LinkWrapper>
        </div>
      </nav>
    </>
  );
}
