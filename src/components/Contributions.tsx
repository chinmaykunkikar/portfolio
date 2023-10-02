"use client";

import Calendar from "@components/Calendar";
import Card from "@components/Card";
import fetcher from "@lib/fetcher";
import useSWRImmutable from "swr";

export default function Contributions() {
  const { data }: any = useSWRImmutable("/api/github", fetcher);

  const contributionCalendar =
    data?.contributionsCollection?.contributionCalendar;
  return <Card>{data && <Calendar data={contributionCalendar} />}</Card>;
}
