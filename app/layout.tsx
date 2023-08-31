import "@app/globals.css";
import Home from "@app/home/page";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: { default: "Chinmay Kunkikar", template: "%s | Chinmay Kunkikar" },
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
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden bg-neutral-100`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
