import Card from "@components/Card";
import {
  AwsLogo,
  BashLogo,
  DockerLogo,
  FigmaLogo,
  JavaScriptLogo,
  MongoDbLogo,
  NextJsLogo,
  NodeLogo,
  ReactLogo,
  TailwindLogo,
  TypeScriptLogo,
  WebpackLogo,
} from "@components/logos";

export default function SkillsWidget() {
  function SkillWrapper({
    icon: SkillIcon,
    label,
  }: {
    icon: any;
    label: string;
  }) {
    return (
      <div className="m-2 flex flex-col items-center justify-start">
        <SkillIcon width={48} height={48} aria-hidden="true" />
        <p title={label} className="mt-1 select-none text-xs font-bold">
          {label}
        </p>
      </div>
    );
  }

  return (
    <Card className="flex flex-col" aria-label="Skills Widget">
      <p
        title="Skills section"
        className="mx-auto mb-2 select-none text-lg font-bold uppercase"
      >
        Skills
      </p>
      <div className="overflow-y-auto scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-500 scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
        <div className="grid-rows-auto grid grid-cols-2 p-1 sm:grid-cols-3 lg:grid-cols-4">
          <SkillWrapper icon={JavaScriptLogo} label="JavaScript" />
          <SkillWrapper icon={ReactLogo} label="ReactJS" />
          <SkillWrapper icon={TypeScriptLogo} label="TypeScript" />
          <SkillWrapper icon={NextJsLogo} label="NextJS" />
          <SkillWrapper icon={MongoDbLogo} label="MongoDB" />
          <SkillWrapper icon={NodeLogo} label="NodeJS" />
          <SkillWrapper icon={AwsLogo} label="AWS" />
          <SkillWrapper icon={TailwindLogo} label="TailwindCSS" />
          <SkillWrapper icon={WebpackLogo} label="Webpack" />
          <SkillWrapper icon={BashLogo} label="Bash Scripting" />
          <SkillWrapper icon={DockerLogo} label="Docker" />
          <SkillWrapper icon={FigmaLogo} label="Figma" />
        </div>
      </div>
    </Card>
  );
}
