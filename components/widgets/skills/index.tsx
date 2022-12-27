import Card from "@components/card";
import AwsIcon from "@components/drawables/aws";
import DockerLogo from "@components/drawables/docker";
import FigmaLogo from "@components/drawables/figma";
import JavaScriptLogo from "@components/drawables/js";
import MongoDbIcon from "@components/drawables/mongodb";
import NextJsLogo from "@components/drawables/nextjs";
import NodeIcon from "@components/drawables/node";
import ReactLogo from "@components/drawables/react";
import TailwindLogo from "@components/drawables/tailwind";
import TerminalLogo from "@components/drawables/terminal";
import TypeScriptLogo from "@components/drawables/typescript";
import WebpackLogo from "@components/drawables/webpack";

export default function SkillsWidget() {
  function SkillWrapper({ icon: SkillIcon, label }: any) {
    return (
      <div className="flex flex-col m-4 items-center">
        <SkillIcon width={64} height={64} />
        <span className="mt-2 select-none font-bold">{label}</span>
      </div>
    );
  }

  return (
    <Card className="col-span-2 max-h-72 overflow-y-auto">
      <div className="grid-rows-auto grid gap-4 grid-cols-4 p-4">
        <SkillWrapper icon={AwsIcon} label="AWS" />
        <SkillWrapper icon={JavaScriptLogo} label="JavaScript ES6" />
        <SkillWrapper icon={ReactLogo} label="ReactJS" />
        <SkillWrapper icon={NextJsLogo} label="NextJS" />
        <SkillWrapper icon={MongoDbIcon} label="MongoDB" />
        <SkillWrapper icon={TypeScriptLogo} label="TypeScript" />
        <SkillWrapper icon={NodeIcon} label="NodeJS" />
        <SkillWrapper icon={WebpackLogo} label="Webpack" />
        <SkillWrapper icon={TailwindLogo} label="TailwindCSS" />
        <SkillWrapper icon={DockerLogo} label="Docker" />
        <SkillWrapper icon={TerminalLogo} label="Shell Scripting" />
        <SkillWrapper icon={FigmaLogo} label="Figma" />
      </div>
    </Card>
  );
}
