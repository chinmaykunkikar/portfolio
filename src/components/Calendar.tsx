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
  const weeks = data?.weeks ?? [];

  return (
    <div className="relative flex flex-col items-center">
      <div className="flex overflow-hidden">
        {weeks?.map((week) => (
          <div key={week.firstDay}>
            {week.contributionDays.map((contribution) => {
              const backgroundColor =
                contribution.contributionCount > 0 && contribution.color;
              return (
                <span
                  key={contribution.date}
                  className="m-2 block h-3 w-3 rounded bg-neutral-200"
                  style={backgroundColor ? { backgroundColor } : undefined}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
