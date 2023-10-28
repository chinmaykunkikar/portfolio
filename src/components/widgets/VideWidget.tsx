import { Card } from "@components/Card";
import { CardLinkButton } from "@components/CardLinkButton";
import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

export function VideWidget() {
  return (
    <Card
      className="flex max-h-80 cursor-default flex-col justify-center p-8"
      aria-label="Vide Project Widget"
    >
      <div className="mb-4 text-2xl font-bold">Vide</div>
      <div className="flex-1 text-lg">
        A Video on Demand platform built using ReactJS and managed on AWS.
      </div>

      <CardLinkButton
        href="https://github.com/chinmaykunkikar/vide-amplify"
        label="View on GitHub"
        variant={ArrowUpRightIcon}
        positionClass="bottom-4 left-4"
      />
      <CardLinkButton href="#" label="Live demo" variant={ArrowRightIcon} />
    </Card>
  );
}
