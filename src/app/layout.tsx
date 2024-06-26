import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/components.css";
import Navigation from "../components/Navigation";
import BackgroundCarousel from "../components/BackgroundCarousel";
import MapButton from "../components/MapButton";
import { Toaster } from 'react-hot-toast';
import PageTransition from "../components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EasySMP - Minecraft Server",
  description: "Join EasySMP for an epic Minecraft adventure!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Toaster position="bottom-center" />
        <BackgroundCarousel />
        <Navigation />
        <PageTransition>
          <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8 mt-16 ml-16">
            {children}
          </main>
        </PageTransition>
        <MapButton />
      </body>
    </html>
  );
}