import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EasySMP - Minecraft Server",
  description: "Join our Minecraft server, EasySMP!",
};

const preloadImages = [
  "/image1.png",
  "/image2.png",
  "/image3.png",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {preloadImages.map((image, index) => (
          <link key={index} rel="preload" href={image} as="image" />
        ))}
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}