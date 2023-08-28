"use client";
import Card from "@components/Card";
import AwsIcon from "@drawables/aws";
import DockerLogo from "@drawables/docker";
import FigmaLogo from "@drawables/figma";
import JavaScriptLogo from "@drawables/js";
import MongoDbIcon from "@drawables/mongodb";
import NextJsLogo from "@drawables/nextjs";
import NodeIcon from "@drawables/node";
import ReactLogo from "@drawables/react";
import TailwindLogo from "@drawables/tailwind";
import TerminalLogo from "@drawables/terminal";
import TypeScriptLogo from "@drawables/typescript";
import WebpackLogo from "@drawables/webpack";

export default function SkillsWidget() {
  function SkillWrapper({ icon: SkillIcon, label }: any) {
    return (
      <div className="m-2 flex flex-col items-center justify-start">
        <SkillIcon width={64} height={64} />
        <span className="mt-1 select-none text-xs font-bold">{label}</span>
      </div>
    );
  }

  return (
    <Card className="flex max-h-80 flex-col md:col-span-2">
      <div className="mx-auto mb-2 select-none text-2xl font-bold">
        My toolkit
      </div>
      <div className="overflow-y-auto scroll-smooth scrollbar-thin scrollbar-track-neutral-200 scrollbar-thumb-neutral-500 scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
        <div className="grid-rows-auto grid grid-cols-2 gap-3 p-2 md:grid-cols-3 lg:grid-cols-4">
          <SkillWrapper icon={JavaScriptLogo} label="JavaScript ES6" />
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
