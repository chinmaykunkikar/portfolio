import Card from "@components/card";
import Me from "@public/me.jpeg";
import Image from "next/image";

export default function PhotoWidget() {
  return (
    <Card className="p-0 overflow-clip">
      <Image
        className="object-cover min-w-full min-h-full"
        src={Me}
        alt="Chinmay Kunkikar"
        quality={50}
      />
    </Card>
  );
}
