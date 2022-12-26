import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import Button from "../button";

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
  const { pathname } = useRouter();

  const { data } = useSWR<CommitSha>(
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
    return (
      <Link href={linkHref} className={otherClasses}>
        <span
          className={pathname == linkHref ? "text-neutral-500" : ""}
          {...props}
        >
          {children}
        </span>
      </Link>
    );
  }

  return (
    <>
      <Head>
        <title>Chinmay Kunkikar</title>
        <meta name="description" content="Portfolio of Chinmay Kunkikar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-screen flex-col items-center justify-between gap-4 px-32 py-8 text-neutral-700 lg:flex-row lg:gap-0">
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
        <div className="flex h-fit items-center gap-8">
          <LinkWrapper linkHref="/">Home</LinkWrapper>
          <LinkWrapper linkHref="/about">
            <Button>About</Button>
          </LinkWrapper>
          <LinkWrapper linkHref="/works">
            <Button>Works</Button>
          </LinkWrapper>
          <LinkWrapper linkHref="/contact">
            <Button>Contact</Button>
          </LinkWrapper>
        </div>
      </div>
    </>
  );
}
