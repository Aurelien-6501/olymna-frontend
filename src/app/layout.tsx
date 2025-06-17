import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Olymna",
  description: "Salle de sport et bien-être",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-b bg-white gap-4 md:gap-0">
          <Link href="/" className="text-xl font-bold">
            Olymna
          </Link>
          <nav className="flex flex-wrap gap-2 md:gap-4 justify-center text-sm">
            <Link href="/coaching">Coachings</Link>
            <Link href="/coach">Nos coachs</Link>
            <Link href="/boutique">Boutique</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/login">Connexion</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="text-center text-xs text-gray-500 mt-auto p-4 border-t">
          © {new Date().getFullYear()} Olymna — Tous droits réservés.
        </footer>
      </body>
    </html>
  );
}
