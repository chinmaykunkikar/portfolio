import Footer from "@components/footer";
import Navbar from "@components/navbar";

export default function Layout({ children }: any) {
  return (
    <div className="container bg-neutral-100">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
