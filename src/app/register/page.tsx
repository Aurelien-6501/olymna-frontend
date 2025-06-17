"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: `${prenom} ${nom}`,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Inscription réussie", data);
        // Rediriger ou stocker le token si nécessaire
      } else {
        console.error("Erreur d'inscription", data.error?.message || data);
      }
    } catch (err) {
      console.error("Erreur réseau", err);
    }
  };

  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Créer un compte</h1>
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Prénom</label>
          <input
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Nom</label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
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
          S&apos;inscrire
        </button>
      </form>
    </main>
  );
}
