"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchReservationsByUser } from "@/lib/api/reservation";
import { cancelReservation } from "@/lib/api/dashboard";

interface Reservation {
  id: number;
  coaching: {
    titre: string;
    date_heure: string;
    salle: string;
  };
}

export default function DashboardPage() {
  const router = useRouter();
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const token = localStorage.getItem("jwt");
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      console.log("USER LOCAL:", user);

      if (!token || !user.id) return;

      try {
        const res = await fetchReservationsByUser(String(user.id));
        console.log("RESERVATIONS REÇUES:", res);
        setReservations(res);
      } catch (error) {
        console.error("Erreur lors du chargement des réservations :", error);
      }
    };

    fetchReservations();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("authChange"));
    router.push("/");
  };

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Mon espace</h1>
      <button
        onClick={handleLogout}
        className="mb-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Se déconnecter
      </button>

      <h2 className="text-xl font-semibold mb-4">Mes réservations</h2>
      {reservations.length === 0 ? (
        <p>Vous n&apos;avez aucune réservation.</p>
      ) : (
        <ul className="space-y-4">
          {reservations.map((res) => {
            const coaching = res.coaching;
            if (!coaching) return null;

            const handleCancelReservation = async () => {
              const token = localStorage.getItem("jwt");
              if (!token) return;

              const success = await cancelReservation(res.id, token);
              if (success) {
                setReservations((prev) => prev.filter((r) => r.id !== res.id));
              }
            };

            return (
              <li key={res.id} className="border p-4 rounded shadow-sm">
                <h3 className="font-bold">{coaching.titre}</h3>
                <p className="text-sm text-gray-600">
                  {new Date(coaching.date_heure).toLocaleString()}
                </p>
                <p className="text-sm mb-2">Salle : {coaching.salle}</p>
                <button
                  onClick={handleCancelReservation}
                  className="text-sm text-red-600 hover:underline"
                >
                  Annuler la réservation
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
