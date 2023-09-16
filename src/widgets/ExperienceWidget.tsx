import Card from "src/components/Card";

export default function ExperienceWidget() {
  return (
    <Card className="md:col-span-2">
      <div className="w-full-h-full mt-16 flex flex-col justify-center px-4">
        <div className="select-none text-3xl font-bold">Experience</div>
        <div className="text-type mt-8 flex cursor-default flex-col font-mono">
          <div className="my-2 flex items-center justify-between ">
            <div className="flex-1 text-sm font-bold md:text-xl md:font-normal">
              MetaBrainz Foundation
            </div>
            <div className="mr-2 text-sm">Student Intern</div>
            <div className="text-sm font-bold">2022</div>
          </div>
          <div className="my-2 flex items-center justify-between text-xl">
            <div className="flex-1 text-sm font-bold md:text-xl md:font-normal">
              Steinn Labs
            </div>
            <div className="mr-2 text-sm">React Intern</div>
            <div className="text-sm font-bold">2021</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
