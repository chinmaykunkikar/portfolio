"use client";
import Card from "@components/Card";
import CardLinkButton from "@components/CardLinkButton";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ProjectsWidget() {
  return (
    <Card>
      <div className="flex h-full w-full select-none flex-col items-center justify-center">
        <span className="text-2xl font-bold">Projects and works</span>
        <CardLinkButton href="/projects" variant={ArrowRightIcon} />
      </div>
    </Card>
  );
}
