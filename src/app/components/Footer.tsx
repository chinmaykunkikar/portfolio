import Image from "next/image";

export default function Footer() {
  return (
    <footer className="my-8 flex justify-center px-4 text-xs lg:px-16 lg:text-lg">
      <span className="text-neutral-500">
        <span>Built with&nbsp;</span>
        <Image
          src="/emoji/heart.png"
          alt="love"
          width={24}
          height={24}
          className="inline"
          quality={100}
        />
        <span>
          &nbsp;by <span className="font-bold">Chinmay Kunkikar</span>
        </span>
      </span>
    </footer>
  );
}
