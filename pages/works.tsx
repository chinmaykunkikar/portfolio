import Card from "@components/card";

export default function Works() {
  return (
    <div className="text-neutral-500">
      <div className="grid-rows-auto grid min-h-screen grid-cols-1 gap-6 px-16 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card className="max-h-80">Fresh Releases</Card>
        <Card className="max-h-80">Vide</Card>
      </div>
    </div>
  );
}
