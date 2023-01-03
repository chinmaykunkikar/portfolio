import Card from "@components/card";

export default function ExperienceWidget() {
  return (
    <Card className="md:col-span-2">
      <div className="flex flex-col justify-center w-full-h-full px-4 mt-16">
        <div className="text-3xl font-bold select-none">Experience</div>
        <div className="flex flex-col font-mono mt-8 text-neutral-500 cursor-default">
          <div className="flex justify-between my-2 text-xl items-center">
            <div className="flex-1">MetaBrainz Foundation</div>
            <div className="text-sm mr-2">Student Intern</div>
            <div className="text-sm font-bold">2022</div>
          </div>
          <div className="flex justify-between my-2 text-xl items-center">
            <div className="flex-1">Steinn Labs</div>
            <div className="text-sm mr-2">React Intern</div>
            <div className="text-sm font-bold">2021</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
