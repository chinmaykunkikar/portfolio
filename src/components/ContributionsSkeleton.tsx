import { Skeleton } from "@components/Skeleton";

export function ContributionsSkeleton() {
  const numWeeks = 8;
  const numDays = 7;

  const skeletonData = Array.from({ length: numWeeks }, () => ({
    contributionDays: Array(numDays).fill(0),
  }));

  return (
    <div className="relative flex flex-col items-center">
      <div className="flex overflow-hidden">
        {skeletonData.map((week, weekIndex) => (
          <div key={weekIndex}>
            {week.contributionDays.map((_, dayIndex) => (
              <Skeleton
                key={dayIndex}
                className="m-2 block h-[14px] w-[14px] rounded bg-neutral-200"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
