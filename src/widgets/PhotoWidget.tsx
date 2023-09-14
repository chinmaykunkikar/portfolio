import Image from "next/image";
import Card from "src/components/Card";

export default function PhotoWidget() {
  return (
    <Card className="overflow-clip rounded-full p-0">
      <Image
        className="pointer-events-none"
        src="/me/me.jpg"
        alt="Chinmay Kunkikar"
        quality={50}
        fill
      />
    </Card>
  );
}
