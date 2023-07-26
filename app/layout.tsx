import { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chinmay Kunkikar",
  description: "Portfolio of Chinmay Kunkikar",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="overflow-x-hidden bg-neutral-100 dark:bg-gray-800">
        <Navbar />
        <main className="px-12 md:px-20 lg:px-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
