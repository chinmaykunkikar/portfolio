"use client";

import Calendar from "@components/Calendar";
import Card from "@components/Card";
import { Skeleton } from "@components/Skeleton";
import GitHubLogo from "@drawables/github";
import fetcher from "@lib/fetcher";
import Link from "next/link";
import useSWRImmutable from "swr";

export default function Contributions() {
  const { data }: any = useSWRImmutable("/api/github-contributions", fetcher);

  const contributionCalendar =
    data?.contributionsCollection?.contributionCalendar;
  return (
    <Card className="flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <GitHubLogo width={72} height={72} className=" fill-brand-github" />
        <Link
          passHref
          href="https://github.com/chinmaykunkikar"
          target="_blank"
          rel="noreferrer"
        >
          <button className="rounded-full bg-brand-github px-4 py-2 text-sm text-neutral-100 transition-colors hover:bg-neutral-700">
            Follow
          </button>
        </Link>
      </div>
      <div>
        <p className="ml-1 select-none font-bold">Chinmay Kunkikar</p>
      </div>
      {data ? <Calendar data={contributionCalendar} /> : <Skeleton className="inline-block w-full h-full bg-neutral-200" />}
    </Card>
  );
}
