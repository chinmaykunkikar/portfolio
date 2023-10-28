import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="mx-2 my-8 flex justify-center text-xs lg:px-16 lg:text-lg"
      aria-label="Footer"
    >
      <span className="text-type">
        <span>Made with&nbsp;</span>
        <Image
          src="/emoji/heart.png"
          alt="love"
          width={20}
          height={20}
          className="inline"
          quality={100}
          priority
        />
        <span>&nbsp;and&nbsp;</span>
        <Image
          src="/emoji/coffee.png"
          alt="coffee"
          width={28}
          height={28}
          className="inline"
          quality={100}
          priority
        />
        <span>
          &nbsp;by&nbsp;
          <span className="font-newsreader lg:text-xl">
            Chinmay&nbsp;Kunkikar
          </span>
        </span>
      </span>
    </footer>
  );
}
