import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }: any) {
  return (
    <div className="container">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
