import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center p-4 text-xs lg:px-16 lg:py-4 lg:text-base">
      <span className="flex items-end text-neutral-500">
        <span>Built with</span>
        <Image
          src="/emoji/heart.png"
          alt="love"
          width={32}
          height={32}
          className="px-1"
        />
        <span>
          by <span className="font-bold">Chinmay Kunkikar</span>
        </span>
      </span>
    </footer>
  );
}
