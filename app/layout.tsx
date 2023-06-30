import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="overflow-x-hidden bg-neutral-100">
          <Navbar />
          <main className="px-12 md:px-20 lg:px-32">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
