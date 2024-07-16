import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Providers } from "./providers";
import Image from "next/image";
import squareLogo from "../app/resources/SquareLogo.webp";
import Footer from "./components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Dips Agency",
  description: "Dips Agency",
};
const dataWebsiteId = process.env.UMAMI_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://analytics.eu.umami.is/script.js"
          data-website-id={`${dataWebsiteId}`}
        ></script>
      </head>
      <body className={poppins.className}>
        <link rel="icon" href="/dips.ico" type="image/x-icon" />
        <Navbar />
        <div className="flex flex-col justify-evenly items-center pt-24 antialiased">
          <Image alt="Dips Agency" src={squareLogo} height={100} width={300} />
          <p className="px-20 sm:px-20 text-center text-lg">
            A Shipping Service offering Speed and Reliability
          </p>
        </div>
        <div className="lg:mt-15 mt-20 scroll-smooth bg-black text-white">
          <Providers>{children}</Providers>
        </div>
        <Footer />
      </body>
    </html>
  );
}
