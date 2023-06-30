import { Metadata } from "next";
import Home from "./home/page";

export const metadata: Metadata = {
  title: "Chinmay Kunkikar",
  description: "Portfolio of Chinmay Kunkikar",
};
export default function Page() {
  return <Home />;
}
