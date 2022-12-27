import Link from "next/link";
import Card from "@components/card";
import LinkArrow from "@components/link-arrow";

export default function ProjectsWidget() {
  return (
    <Card className="relative">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <span className="text-2xl font-bold">Checkout my works</span>
        <LinkArrow href="/works" as={Link} variant="internal" />
      </div>
    </Card>
  );
}
