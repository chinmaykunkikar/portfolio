import Card from "@components/Card";
import CardLinkButton from "@components/CardLinkButton";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ContactWidget() {
  return (
    <Card className="flex select-none flex-col justify-center p-8">
      <div className="mx-auto flex items-center">
        <div className="mr-2 text-xl font-bold lg:text-3xl">
          Let&apos;s get in touch
        </div>
      </div>
      <CardLinkButton
        href="/contact"
        label="Contact page"
        variant={ArrowRightIcon}
      />
    </Card>
  );
}
