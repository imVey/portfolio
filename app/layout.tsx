import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/page.jsx";
import Header from "./components/header/page.jsx";
import Intro from "./intro/page.jsx";
import Presentation from "./presentation/page.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Mon portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Intro />
        <Presentation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
