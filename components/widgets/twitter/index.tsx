import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Card from "../../card";

export default function TwitterWidget() {
  return (
    <Card className="flex flex-col items-center justify-center">
      <Image
        src="/twitter.svg"
        width={128}
        height={128}
        alt="Chinmay's Twitter"
      />
      <a
        href="https://twitter.com/ChinmayKunkikar"
        target="_blank"
        className="text-bold mt-4 mr-4 self-end hover:text-neutral-500"
        rel="noreferrer"
      >
        <ArrowRightCircleIcon width={42} height={42} />
      </a>
    </Card>
  );
}
