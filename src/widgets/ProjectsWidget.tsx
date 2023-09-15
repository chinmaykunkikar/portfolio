import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Card from "src/components/Card";
import CardLinkButton from "src/components/CardLinkButton";

export default function ProjectsWidget() {
  return (
    <Card className="flex aspect-auto select-none flex-col items-center justify-center">
      <span className="text-xl font-bold lg:text-2xl">Projects and works</span>
      <CardLinkButton href="/" label="Projects page" variant={ArrowRightIcon} />
    </Card>
  );
}
