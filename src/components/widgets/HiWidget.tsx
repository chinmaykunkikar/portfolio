import Card from "@components/Card";

export default function HiWidget() {
  return (
    <Card
      className="flex flex-col items-center justify-center"
      aria-label="Hi Widget"
    >
      <div className="font-newsreader text-2xl">Chinmay Kunkikar</div>
    </Card>
  );
}
