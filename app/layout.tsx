import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
  weight: "300 900",
});

export const metadata: Metadata = {
  title: "ByteSpace — Modern Web Development",
  description: "Next.js 16 Project with Tailwind CSS, MagicUI, React Bits, Framer Motion, and GSAP.",
  openGraph: {
    title: "ByteSpace — Modern Web Development",
    description: "Next.js 16 Project with Tailwind CSS, MagicUI, React Bits, Framer Motion, and GSAP.",
    url: "https://bytespace.dev",
    siteName: "ByteSpace",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${satoshi.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-satoshi bg-black text-white selection:bg-lime selection:text-black"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
