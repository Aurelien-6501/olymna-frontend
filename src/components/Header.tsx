"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      setIsLoggedIn(!!localStorage.getItem("jwt"));
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);
    window.addEventListener("authChange", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("authChange", checkAuth);
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
