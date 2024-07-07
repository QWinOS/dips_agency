import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Providers } from "./providers";
import Image from "next/image";
import favicon from "../app/resources/SquareLogo.webp";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dips Agency",
  description: "Dips Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex justify-evenly items-center pt-24">
          <Image alt="Dips Agency" src={favicon} height={100} width={300} />
        </div>
        <div className="lg:mt-15 mt-20 scroll-smooth">
          <Providers>{children}</Providers>
        </div>
        <Footer />
      </body>
    </html>
  );
}
