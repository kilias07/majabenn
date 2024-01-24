import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const playfair = Playfair_Display({ subsets: ["latin"],
variable: '--playfair'});

export const metadata: Metadata = {
  title: "Maja Benn",
  description: "Konsultacje psychogeriatryczne, doradztwo psychologiczne, treningi funkcji poznawczych, psychoedukacja i szkolenia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  );
}
