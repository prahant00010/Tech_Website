import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Navbar/ResponsiveNav";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

// Task To do (Follow the tutorial)
// 1) Customize your font
// 2) Add the font to your layout
// 3) Add Metadata to your layout

const font=Rethink_Sans({
  weight:['400','500','600','700','800'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Startup landing page",
  description: "Startup landing page using next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
      <ResponsiveNav/>
        {children}
         <Footer/>
         <ScrollToTop/>
      </body>
    </html>
  );
}
