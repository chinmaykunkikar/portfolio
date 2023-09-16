import { PageWrapper } from "@components/PageWrapper";
import FreshReleasesWidget from "@widgets/FreshReleasesWidget";
import VideWidget from "@widgets/VideWidget";

export default function Projects() {
  return (
    <PageWrapper className="text-type">
      <div className="grid-rows-auto grid min-h-screen grid-cols-1 gap-6 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <FreshReleasesWidget />
        <VideWidget />
      </div>
    </PageWrapper>
  );
}
