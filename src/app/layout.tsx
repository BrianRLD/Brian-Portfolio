import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

export const metadata: Metadata = {
  title: "Brian Portfolio",
  description: "Portfolio con estilo retro y animaciones pixel",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`${pressStart.variable} antialiased bg-layout text-colored min-h-screen`}
      >
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
