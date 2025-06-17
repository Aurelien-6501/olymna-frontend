"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ identifier: email, password }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        console.log("Connexion réussie", data);
        // Stocker le token ou rediriger
      } else {
        console.error("Erreur de connexion", data.message);
      }
    } catch (err) {
      console.error("Erreur réseau", err);
    }
  };

  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Connexion</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded"
        >
          Se connecter
        </button>
        <p className="text-center text-sm mt-4">
          Pas encore de compte ?{" "}
          <a href="/register" className="text-blue-600 underline">
            Créer un compte
          </a>
        </p>
      </form>
    </main>
  );
}
