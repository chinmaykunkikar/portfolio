import Card from "@components/card";
import CardLinkButton from "@components/card-link-btn";
import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function FreshReleasesWidget() {
  return (
    <Card className="flex max-h-80 cursor-default flex-col justify-center p-8">
      <div className="mb-4 text-2xl font-bold">Fresh Releases</div>
      <div className="mb-8 flex-1 text-lg">
        Keep a track of your upcoming music releases with a beautiful timeline
        of releases loaded with the ability to filter them according to
        categories.
      </div>
      <CardLinkButton
        href="https://github.com/metabrainz/listenbrainz-server/tree/master/frontend/js/src/fresh-releases"
        variant={ArrowUpRightIcon}
        positionClass="bottom-4 left-4"
      />
      <CardLinkButton href="#" variant={ArrowRightIcon} />
    </Card>
  );
}
