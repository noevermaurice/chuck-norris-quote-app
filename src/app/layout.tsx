import type { Metadata } from "next";
import "./globals.scss";
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
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
