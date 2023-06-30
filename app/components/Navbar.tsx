"use client";
import fetcher from "@lib/fetcher";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useSWRImmutable from "swr/immutable";
import Button from "./Button";

type CommitSha = {
  sha: string;
};

type LinkWrapperProps = {
  children: string | JSX.Element | JSX.Element[];
  linkHref: string;
  otherClasses?: string;
  [props: string]: any;
};

export default function Navbar() {
  const pathname = usePathname();

  const { data } = useSWRImmutable<CommitSha>(
    "https://api.github.com/repos/chinmaykunkikar/portfolio/commits/next",
    fetcher
  );
  const shortSha = data?.sha.slice(0, 7);

  function LinkWrapper({
    children,
    linkHref,
    otherClasses,
    ...props
  }: LinkWrapperProps) {
    const activeLink = pathname === linkHref;
    return (
      <Link href={linkHref} className={otherClasses}>
        <span className={activeLink ? "text-neutral-500" : ""} {...props}>
          {children}
        </span>
      </Link>
    );
  }

  return (
    <>
      <div className="flex w-screen flex-col items-center justify-between gap-4 px-12 py-8 text-neutral-700 md:px-20 lg:flex-row lg:gap-0 lg:px-32">
        <span className="text-xl">
          <h3 className="cursor-default	select-none	font-mono">
            [chinmay@web{" "}
            <a
              className="font-bold"
              href="https://github.com/chinmaykunkikar/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              {shortSha}
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
      </div>
    </>
  );
}
