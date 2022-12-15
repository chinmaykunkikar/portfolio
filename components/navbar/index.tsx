import Head from "next/head";
import Button from "../button";

export default function Navbar() {
  const navButtons = ["Home", "Works", "About", "Resume", "Contact"];
  const shortSha = "68adce8";
  return (
    <>
      <Head>
        <title>Chinmay Kunkikar</title>
        <meta name="description" content="Portfolio of Chinmay Kunkikar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-screen flex-col items-center justify-between gap-4 px-16 py-6 lg:flex-row lg:gap-0">
        <span className="text-xl text-gray-600">
          <h3 className="font-mono">
            [chinmay@web{" "}
            <a
              className="font-bold"
              href="https://github.com/chinmaykunkikar/chinmaykunkikar.github.io"
              target="_blank"
              rel="noreferrer"
            >
              {shortSha}
            </a>
            ]${" "}
            <span className="animate-[pulse_1.25s_ease-out_infinite]">_</span>
          </h3>
        </span>
        <div className="flex h-fit items-center gap-8">
          {navButtons.map((btn) => (
            <Button key={`navbtn-${btn}`}>{btn}</Button>
          ))}
        </div>
      </div>
    </>
  );
}
