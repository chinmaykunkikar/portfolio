import Image from "next/image";
import Card from "../../card";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export default function GitHubWidget() {
  return (
    <Card className="flex flex-col items-center justify-center">
      <Image
        src="/github.svg"
        width={128}
        height={128}
        alt="Chinmay's GitHub profile"
      />
      <a
        href="https://github.com/chinmaykunkikar/"
        target="_blank"
        className="text-bold mt-4 mr-4 self-end hover:text-neutral-500"
        rel="noreferrer"
      >
        <ArrowRightCircleIcon width={42} height={42} />
      </a>
    </Card>
  );
}
