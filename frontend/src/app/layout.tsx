import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Ember Herb Cosmetics",
  description: "Natural skin & hair care solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow px-6 py-6 bg-gray-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
