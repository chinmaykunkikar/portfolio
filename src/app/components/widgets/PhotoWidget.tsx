import Me from "@public/me/me.jpeg";
import Image from "next/image";
import Card from "src/app/components/Card";

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
