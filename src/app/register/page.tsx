"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      router.push("/");
    }
  }, []);

  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const passwordIsValid = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(
      password
    );
    if (!passwordIsValid) {
      setError(
        "Le mot de passe doit contenir au moins 8 caractères et un caractère spécial."
      );
      return;
    }

    setLoading(true);
    setError("");

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
        localStorage.setItem("jwt", data.jwt);
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "/";
      } else {
        setError(data.error?.message || "Erreur d'inscription");
      }
    } catch (err) {
      setError("Erreur réseau");
      console.error("Erreur réseau", err);
    }

    setLoading(false);
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
          className="w-full bg-black text-white py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Chargement..." : "S'inscrire"}
        </button>
      </form>
      {error && (
        <p className="text-red-500 text-sm text-center mt-4">{error}</p>
      )}
    </main>
  );
}
