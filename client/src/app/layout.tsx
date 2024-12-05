import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import TopBar from "@/components/topBar";



export const metadata: Metadata = {
  title: "Sambandharthi ",
  description: "Sambandharthi is a platform for Helping others.",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-900",
          poppins.className
        )}
      >
        <TopBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
