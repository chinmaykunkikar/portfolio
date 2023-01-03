import Card from "@components/card";
import CardLinkButton from "@components/card-link-btn";
import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function VideWidget() {
  return (
    <Card className="flex max-h-80 cursor-default flex-col justify-center p-8">
      <div className="mb-4 text-2xl font-bold">Vide</div>
      <div className="flex-1 text-lg">
        A Video on Demand platform built using ReactJS and managed on AWS.
      </div>

      <CardLinkButton
        href="https://github.com/chinmaykunkikar/vide-amplify"
        variant={ArrowUpRightIcon}
        positionClass="bottom-4 left-4"
      />
      <CardLinkButton href="#" variant={ArrowRightIcon} />
    </Card>
  );
}
