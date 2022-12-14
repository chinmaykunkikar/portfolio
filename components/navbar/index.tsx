import Head from "next/head";
import Link from "next/link";

export default function Navbar() {
    const navButtons = ["Home", "Works", "About", "Resume", "Contact"]
  return (
    <>
      <Head>
        <title>Chinmay Kunkikar</title>
        <meta name="description" content="Portfolio of Chinmay Kunkikar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-screen flex-col items-center justify-between gap-4 px-16 py-6 lg:flex-row lg:gap-0">
        <Link href="#">
          <h3 className="font-mono font-bold">[chinmay@web 68adce8]$ _</h3>
        </Link>
        <div className="flex h-fit items-center gap-2 lg:gap-8">
          {navButtons.map((btn) => (
            <button key={`navbtn-${btn}`} className="text-gray-500">{btn}</button>
          ))}
        </div>
      </div>
    </>
  );
}
