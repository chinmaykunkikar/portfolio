import Card from "@components/card";
import CardLinkButton from "@components/card-link-btn";
import ResumeIcon from "@components/drawables/resume";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function ResumeWidget() {
  return (
    <Card>
      <div className="flex flex-col font-bold text-3xl md:text-2xl w-full h-full justify-center select-none items-center mb-16 p-4">
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
