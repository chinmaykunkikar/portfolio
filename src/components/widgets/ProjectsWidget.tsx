import { Card } from "@components/Card";
import { CardLinkButton } from "@components/CardLinkButton";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export function ProjectsWidget() {
  return (
    <Card
      className="flex aspect-auto select-none flex-col items-center justify-center"
      aria-label="Projects Widget"
    >
      <span className="text-xl font-bold lg:text-2xl">Projects and works</span>
      <CardLinkButton href="/" label="Projects page" variant={ArrowRightIcon} />
    </Card>
  );
}
