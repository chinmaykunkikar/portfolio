import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

export default function Layout({ children }: any) {
  return (
    <div className="bg-neutral-100 overflow-x-hidden">
      <Navbar />
      <main className="px-12 md:px-20 lg:px-32">{children}</main>
      <Footer />
    </div>
  );
}
