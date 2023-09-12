import "@app/globals.css";
import { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";
import { twJoin } from "tailwind-merge";

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

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twJoin(
          "bg-neutral-100 antialiased",
          inter.className,
          roboto_mono.variable,
        )}
      >
        <Navbar />
        <main className="px-8 md:px-16 lg:px-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
