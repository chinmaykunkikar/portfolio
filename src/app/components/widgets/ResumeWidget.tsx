import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Card from "src/app/components/Card";
import CardLinkButton from "src/app/components/CardLinkButton";
import ResumeIcon from "src/app/components/drawables/resume";

export default function ResumeWidget() {
  return (
    <Card>
      <div className="mb-16 flex h-full w-full select-none flex-col items-center justify-center p-4 text-3xl font-bold md:text-2xl">
        <ResumeIcon width={72} height={72} fill="#777" className="mb-4" />
        <div>See my resume</div>
      </div>
      <CardLinkButton
        href="/me/Resume - Chinmay Kunkikar.pdf"
        targetBlank
        variant={ArrowDownTrayIcon}
      />
    </Card>
  );
}
