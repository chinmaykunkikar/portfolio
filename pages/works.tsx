import Card from "../components/card";

export default function Works() {
  return (
    <div className="text-neutral-500">
      <h1 className="flex justify-center px-10 py-8 text-9xl font-semibold text-neutral-200">
        Works
      </h1>
      <div className="grid-rows-auto grid min-h-screen grid-cols-1 gap-6 px-16 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card>Project</Card>
        <Card>Project</Card>
        <Card className="col-span-2">Fresh Releases</Card>
        <Card>Project</Card>
        <Card className="col-span-2">Vide</Card>
        <Card>Project</Card>
      </div>
    </div>
  );
}
