// Import the Metadata type from Next.js for SEO and page metadata
import type { Metadata } from "next";
// Import global styles that will be applied to the entire application
import "./globals.scss";
// Import Header and Footer components from the components directory
import {Header} from "@/components/Layout/Header";
import {Footer} from "@/components/Layout/Footer";

// Define metadata for all pages in the application (used by Next.js for SEO)
export const metadata: Metadata = {
    title: "Quote app",
    description: "This is a quote app.",
};

// Define the root layout component that wraps around all pages in the application
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    // TypeScript type definition for children prop, making it read-only
    children: React.ReactNode;
}>) {
    return (
        // Set the HTML language attribute to English
        <html lang="en">
        <body
            // Apply CSS classes to the body:
            // - h-screen: make body take up full viewport height
            // - relative: set position to relative for child element positioning
            // - px-4: add horizontal padding of 4 units
            // - pt-4: add top padding of 4 units
            className={`h-screen relative px-4 pt-4`}
        >
        {/* Render the Header component at the top of every page */}
        <Header/>
        {/*
          Main content area that will contain the current page's content
          pb-16: add bottom padding of 16 units to prevent content from being hidden by footer
        */}
        <main className={'pb-16'}>{children}</main>
        {/* Render the Footer component at the bottom of every page */}
        <Footer/>
        </body>
        </html>
    );
}