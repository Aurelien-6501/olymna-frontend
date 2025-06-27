"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    const jwt = url.searchParams.get("jwt");

    if (jwt) {
      localStorage.setItem("jwt", jwt);
      url.searchParams.delete("jwt");
      window.history.replaceState({}, "", url.pathname); // Nettoie l’URL
      window.dispatchEvent(new Event("authChange")); // Déclenche une MAJ
    }
  }, []);

  useEffect(() => {
    const checkAuth = () => {
      setIsLoggedIn(
        !!localStorage.getItem("jwt") || !!localStorage.getItem("google_jwt")
      );
    };

    checkAuth();
    setTimeout(checkAuth, 0);
    window.addEventListener("storage", checkAuth);
    window.addEventListener("authChange", checkAuth);
    window.addEventListener("load", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("authChange", checkAuth);
      window.removeEventListener("load", checkAuth);
    };
  }, []);

  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-b bg-white gap-4 md:gap-0">
      <Link href="/" className="text-xl font-bold">
        Olymna
      </Link>
      <nav className="flex flex-wrap gap-2 md:gap-4 justify-center text-sm">
        <Link href="/coaching">Coachings</Link>
        <Link href="/coach">Nos coachs</Link>
        <Link href="/boutique">Boutique</Link>
        <Link href="/blog">Blog</Link>
        {isLoggedIn ? (
          <Link href="/dashboard">Dashboard</Link>
        ) : (
          <Link href="/login">Connexion</Link>
        )}
      </nav>
    </header>
  );
}
