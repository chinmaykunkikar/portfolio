import "@app/globals.css";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://chinmaykunkikar.me"),
  title: { default: "Chinmay Kunkikar", template: "%s | Chinmay Kunkikar" },
  description: "Developer, open source enthusiast",
  openGraph: {
    title: "Chinmay Kunkikar",
    description: "Developer, open source enthusiast",
    url: "https://chinmaykunkikar.me",
    siteName: "Chinmay Kunkikar",
    locale: "en",
    type: "website",
  },
  twitter: {
    title: "Chinmay Kunkikar",
    card: "summary_large_image",
  },
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
      <body className={`antialiased ${inter.className} bg-neutral-100`}>
        <Navbar />
        <main className="px-8 md:px-16 lg:px-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
