import Card from "src/components/Card";
import AwsIcon from "src/components/drawables/aws";
import DockerLogo from "src/components/drawables/docker";
import FigmaLogo from "src/components/drawables/figma";
import JavaScriptLogo from "src/components/drawables/js";
import MongoDbIcon from "src/components/drawables/mongodb";
import NextJsLogo from "src/components/drawables/nextjs";
import NodeIcon from "src/components/drawables/node";
import ReactLogo from "src/components/drawables/react";
import TailwindLogo from "src/components/drawables/tailwind";
import TerminalLogo from "src/components/drawables/terminal";
import TypeScriptLogo from "src/components/drawables/typescript";
import WebpackLogo from "src/components/drawables/webpack";

export default function SkillsWidget() {
  function SkillWrapper({ icon: SkillIcon, label }: any) {
    return (
      <div className="m-2 flex flex-col items-center justify-start">
        <SkillIcon width={48} height={48} />
        <span className="mt-1 select-none text-xs font-bold">{label}</span>
      </div>
    );
  }

  return (
    <Card className="flex flex-col">
      <div className="mx-auto mb-2 select-none text-lg font-bold uppercase">
        Skills
      </div>
      <div className="overflow-y-auto scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-500 scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
        <div className="grid-rows-auto grid grid-cols-2 p-1 sm:grid-cols-3 lg:grid-cols-4">
          <SkillWrapper icon={JavaScriptLogo} label="JavaScript" />
          <SkillWrapper icon={ReactLogo} label="ReactJS" />
          <SkillWrapper icon={TypeScriptLogo} label="TypeScript" />
          <SkillWrapper icon={NextJsLogo} label="NextJS" />
          <SkillWrapper icon={MongoDbIcon} label="MongoDB" />
          <SkillWrapper icon={NodeIcon} label="NodeJS" />
          <SkillWrapper icon={AwsIcon} label="AWS" />
          <SkillWrapper icon={TailwindLogo} label="TailwindCSS" />
          <SkillWrapper icon={WebpackLogo} label="Webpack" />
          <SkillWrapper icon={TerminalLogo} label="Shell Scripting" />
          <SkillWrapper icon={DockerLogo} label="Docker" />
          <SkillWrapper icon={FigmaLogo} label="Figma" />
        </div>
      </div>
    </Card>
  );
}
