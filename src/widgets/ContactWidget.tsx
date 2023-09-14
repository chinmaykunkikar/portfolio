import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Card from "src/components/Card";
import CardLinkButton from "src/components/CardLinkButton";

export default function ContactWidget() {
  return (
    <Card className="flex select-none flex-col justify-center p-8">
      <div className="mx-auto flex items-center">
        <div className="mr-2 text-3xl font-bold">Let&apos;s get in touch</div>
      </div>
      <CardLinkButton
        href="/contact"
        label="Contact page"
        variant={ArrowRightIcon}
      />
    </Card>
  );
}
