import FreshReleasesWidget from "@components/widgets/fresh-releases";
import VideWidget from "@components/widgets/vide";

export default function Projects() {
  return (
    <div className="text-neutral-500">
      <div className="grid-rows-auto grid min-h-screen grid-cols-1 gap-6 px-12 pb-8 md:grid-cols-2 md:px-20 lg:grid-cols-3 lg:px-32 xl:grid-cols-4">
        <FreshReleasesWidget />
        <VideWidget />
      </div>
    </div>
  );
}
