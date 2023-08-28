"use client";
import Card from "@components/Card";
import CardLinkButton from "@components/CardLinkButton";
import ResumeIcon from "@drawables/resume";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function ResumeWidget() {
  return (
    <Card>
      <div className="mb-16 flex h-full w-full select-none flex-col items-center justify-center p-4 text-3xl font-bold md:text-2xl">
        <ResumeIcon width={72} height={72} fill="#777" className="mb-4" />
        <div>See my resume</div>
      </div>
      <CardLinkButton
        href="/me/Resume - Chinmay Kunkikar.pdf"
        targetBlank
        variant={ArrowDownTrayIcon}
      />
    </Card>
  );
}
