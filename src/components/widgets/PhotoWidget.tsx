import Card from "@components/Card";
import Image from "next/image";
import me from "public/me/me.jpg";

export default function PhotoWidget() {
  return (
    <Card
      className="relative overflow-hidden rounded-full p-0"
      aria-label="Photo Widget"
    >
      <Image
        className="pointer-events-none object-cover"
        src={me}
        priority
        fill
        sizes="100%"
        placeholder="blur"
        quality={50}
        alt="Chinmay Kunkikar"
      />
    </Card>
  );
}
