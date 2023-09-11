"use client";
import Card from "@components/Card";
import CardLinkButton from "@components/CardLinkButton";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ContactWidget() {
  return (
    <Card className="flex select-none flex-col justify-center p-8">
      <div className="mx-auto flex items-center">
        <div className="mr-2 text-3xl font-bold">Let&apos;s get in touch</div>
      </div>
      <CardLinkButton href="/contact" variant={ArrowRightIcon} />
    </Card>
  );
}
