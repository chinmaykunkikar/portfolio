// import { motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface Contribution {
  date: string;
  contributionCount: number;
  color: string;
}

interface Month {
  name: string;
  firstDay: string;
  totalWeeks: number;
  contributionsCount: number;
}

interface CalendarProps {
  data?: {
    weeks: {
      firstDay: string;
      contributionDays: Contribution[];
    }[];
    months: Month[];
    colors: string[];
  };
}

export default function Calendar({ data }: CalendarProps) {
  const [selectContribution, setSelectContribution] = useState<{
    count: number | null;
    date: string | null;
  }>({
    count: null,
    date: null,
  });

  const weeks = data?.weeks ?? [];
  const months =
    data?.months?.map((month: Month) => {
      const filterContributionDay = weeks
        .filter(
          (week) => week.firstDay.slice(0, 7) === month.firstDay.slice(0, 7),
        )
        .map((item) => item.contributionDays)
        .flat(1);
      const getContributionsByMonth = filterContributionDay.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.contributionCount,
        0,
      );

      return {
        ...month,
        contributionsCount: getContributionsByMonth,
      };
    }) ?? [];

  return (
    <>
      <div
        className="relative flex flex-col"
        onMouseLeave={() => setSelectContribution({ count: null, date: null })}
      >
        <ul className="flex justify-start gap-[3px] overflow-hidden text-xs text-neutral-400">
          {months.map((month) => (
            <li
              key={month.firstDay}
              className={twMerge(month.totalWeeks < 2 ? "invisible" : "")}
              style={{ minWidth: 21 * month.totalWeeks }}
            >
              {month.name}
            </li>
          ))}
        </ul>

        <div className="flex justify-start gap-[3px] overflow-hidden">
          {weeks?.map((week) => (
            <div key={week.firstDay}>
              {week.contributionDays.map((contribution) => {
                const backgroundColor =
                  contribution.contributionCount > 0 && contribution.color;

                return (
                  // <motion.span
                  <span
                    key={contribution.date}
                    // initial="initial"
                    // animate="animate"
                    // variants={{
                    //   initial: { opacity: 0, translateY: -20 },
                    //   animate: {
                    //     opacity: 1,
                    //     translateY: 0,
                    //     transition: { delay: getRandomDelayAnimate },
                    //   },
                    // }}
                    className="mx-1 my-2 block h-4 w-4 rounded bg-neutral-200"
                    style={backgroundColor ? { backgroundColor } : undefined}
                    onClick={() =>
                      setSelectContribution({
                        count: contribution.contributionCount,
                        date: contribution.date,
                      })
                    }
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div
        className={twMerge(
          selectContribution?.date ? "opacity-100" : "opacity-0",
          "max-w-fit rounded-lg bg-neutral-200 px-2 py-1 text-xs text-neutral-700",
        )}
      >
        {selectContribution?.count === 0 ? "No" : selectContribution?.count}{" "}
        contributions on{" "}
        {new Date(selectContribution.date!).toLocaleDateString(undefined, {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </div>
    </>
  );
}
