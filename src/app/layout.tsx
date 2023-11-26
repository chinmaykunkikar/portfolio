import "@app/globals.css";
import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { Metadata } from "next";
import { Manrope, Newsreader, Roboto_Mono } from "next/font/google";
import { twJoin } from "tailwind-merge";

export const metadata: Metadata = {
  metadataBase: new URL("https://chinmaykunkikar.me"),
  title: { default: "Chinmay Kunkikar", template: "%s | Chinmay Kunkikar" },
  description: "Web Developer, Designer, Open source enthusiast",
  openGraph: {
    title: "Chinmay Kunkikar",
    description: "Web Developer, Designer, Open source enthusiast",
    url: "https://chinmaykunkikar.me",
    images: ["/opengraph-image.png"],
    siteName: "Chinmay Kunkikar",
    locale: "en",
    type: "website",
  },
  twitter: {
    title: "Chinmay Kunkikar",
    description: "Web Developer, Designer, Open source enthusiast",
    images: ["/twitter-image.png"],
    card: "summary_large_image",
  },
};

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
  variable: "--font-newsreader",
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
          manrope.className,
          roboto_mono.variable,
          newsreader.variable,
        )}
      >
        <Navbar />
        <main aria-label="Main" className="px-8 md:px-16 lg:px-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
