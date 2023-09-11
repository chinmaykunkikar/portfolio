import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Card from "src/app/components/Card";
import CardLinkButton from "src/app/components/CardLinkButton";

export default function ProjectsWidget() {
  return (
    <Card className="flex aspect-auto select-none flex-col items-center justify-center">
      <span className="text-2xl font-bold">Projects and works</span>
      <CardLinkButton href="/projects" variant={ArrowRightIcon} />
    </Card>
  );
}
