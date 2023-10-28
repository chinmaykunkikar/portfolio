import { Card } from "@components/Card";

export function ExperienceWidget() {
  return (
    <Card className="md:col-span-2" aria-label="Experience Widget">
      <div className="w-full-h-full flex flex-col justify-center px-4 pt-4">
        <div className="select-none font-newsreader text-4xl">Career</div>
        <div className="mt-4 flex cursor-default flex-col text-type">
          <div className="flex items-center justify-between">
            <div className="flex-1 text-sm font-bold md:text-xl md:font-normal">
              MetaBrainz Foundation
            </div>
            <div className="mr-2 text-sm">Web Developer</div>
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
