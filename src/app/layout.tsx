import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

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
        <Header />
        <main>{children}</main>
        <footer className="text-center text-xs text-gray-500 mt-auto p-4 border-t">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <span>
              © {new Date().getFullYear()} Olymna — Tous droits réservés.
            </span>
            <nav className="flex gap-3">
              <a href="/mentions-legales" className="hover:underline">
                Mentions légales
              </a>
              <a href="/contact" className="hover:underline">
                Nous contacter
              </a>
              <a href="/cgv" className="hover:underline">
                CGV
              </a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
