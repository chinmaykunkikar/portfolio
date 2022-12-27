import Card from "@components/card";
import CardLinkButton from "@components/card-link-btn";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ProjectsWidget() {
  return (
    <Card>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <span className="text-2xl font-bold">Projects and works</span>
        <CardLinkButton href="/works" as={Link} variant={ArrowRightIcon} />
      </div>
    </Card>
  );
}
