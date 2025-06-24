"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginSuccessPage() {
  const router = useRouter();
  const params = useSearchParams();
  const token = params?.get("token");

  useEffect(() => {
    if (token) {
      localStorage.setItem("jwt", token);
      router.push("/");
    }
  }, [token]);

  return <p>Connexion avec Google réussie. Redirection...</p>;
}
