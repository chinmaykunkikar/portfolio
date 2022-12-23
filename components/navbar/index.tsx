import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import { CommitShaType } from "../../pages/api/commit-sha";
import Button from "../button";

export default function Navbar() {
  const { data } = useSWR<CommitShaType>("/api/commit-sha", fetcher);

  return (
    <>
      <Head>
        <title>Chinmay Kunkikar</title>
        <meta name="description" content="Portfolio of Chinmay Kunkikar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-screen flex-col items-center justify-between gap-4 px-16 py-6 text-neutral-600 lg:flex-row lg:gap-0">
        <span className="text-xl">
          <h3 className="cursor-default	select-none	font-mono">
            [chinmay@web{" "}
            <a
              className="font-bold"
              href="https://github.com/chinmaykunkikar/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              {data?.shortSha}
            </a>
            ]$ <span className="animate-pulse">&#9644;</span>
          </h3>
        </span>
        <div className="flex h-fit items-center gap-8">
          <Link href="/">
            <Button>Home</Button>
          </Link>
          <Link href="/works">
            <Button>Works</Button>
          </Link>
          <Link href="/about">
            <Button>About</Button>
          </Link>
          <Link href="/resume">
            <Button>Resume</Button>
          </Link>
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
