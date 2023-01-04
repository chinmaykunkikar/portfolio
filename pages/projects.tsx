import FreshReleasesWidget from "@components/widgets/fresh-releases";
import VideWidget from "@components/widgets/vide";

export default function Projects() {
  return (
    <div className="text-neutral-500">
      <div className="grid-rows-auto grid min-h-screen grid-cols-1 gap-6 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <FreshReleasesWidget />
        <VideWidget />
      </div>
    </div>
  );
}
