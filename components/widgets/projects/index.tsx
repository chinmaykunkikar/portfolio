import Link from "next/link";
import Card from "@components/card";
import LinkArrow from "@components/link-arrow";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ProjectsWidget() {
  return (
    <Card>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <span className="text-2xl font-bold">Checkout my works</span>
        <LinkArrow href="/works" as={Link} variant={ArrowRightIcon} />
      </div>
    </Card>
  );
}
