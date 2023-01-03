import Footer from "@components/footer";
import Navbar from "@components/navbar";

export default function Layout({ children }: any) {
  return (
    <div className="bg-neutral-100 overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
