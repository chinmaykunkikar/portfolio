import { Card } from "@components/Card";
import { CardLinkButton } from "@components/CardLinkButton";
import { ResumeIcon } from "@components/logos";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export function ResumeWidget() {
  return (
    <Card aria-label="Resume Widget">
      <div className="mb-16 flex h-full w-full select-none flex-col items-center justify-center p-4 text-xl font-bold lg:text-2xl">
        <ResumeIcon width={72} height={72} fill="#777" className="mb-4" />
        <p>Here&apos;s my resume</p>
      </div>
      <CardLinkButton
        href="/me/Resume - Chinmay Kunkikar.pdf"
        label="Download resume in PDF"
        targetBlank
        variant={ArrowDownTrayIcon}
      />
    </Card>
  );
}
