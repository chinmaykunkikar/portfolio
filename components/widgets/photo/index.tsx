import Card from "@components/card";
import Me from "@public/me/me.jpeg";
import Image from "next/image";

export default function PhotoWidget() {
  return (
    <Card className="overflow-clip p-0">
      <Image
        className="pointer-events-none min-h-full min-w-full object-cover"
        src={Me}
        alt="Chinmay Kunkikar"
        quality={50}
      />
    </Card>
  );
}
