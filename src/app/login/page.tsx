"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const handleGoogleLogin = () => {
  window.location.href = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/connect/google`;
};

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      router.push("/");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

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
        localStorage.setItem("jwt", data.jwt);
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "/";
      } else {
        setError(data.error?.message || "Erreur de connexion");
      }
    } catch (err) {
      setError("Erreur réseau");
      console.error("Erreur réseau", err);
    }

    setLoading(false);
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
          className="w-full bg-black text-white py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Chargement..." : "Se connecter"}
        </button>
        <div className="my-4 text-center text-sm text-gray-500">ou</div>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full bg-white border border-gray-300 text-black py-2 rounded hover:bg-gray-100 flex items-center justify-center space-x-2"
        >
          <img src="/google.svg" alt="Google" className="w-5 h-5" />
          <span>Se connecter avec Google</span>
        </button>
        {error && (
          <p className="text-red-500 text-sm text-center mt-4">{error}</p>
        )}
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
