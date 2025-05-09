import type { Metadata } from "next";
import "./globals.scss";
import {Header} from "@/components/Layout/Header";
import {Footer} from "@/components/Layout/Footer";
export const metadata: Metadata = {
  title: "Quote app",
  description: "This is a quote app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-screen relative px-4 pt-4`}
      >
      <Header/>
      <main className={'pb-16'}>{children}</main>
      <Footer/>
      </body>
    </html>
  );
}
