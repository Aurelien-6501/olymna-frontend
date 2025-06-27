"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchReservationsByUser } from "@/lib/api/reservation";
import { cancelReservation } from "@/lib/api/dashboard";
import type { Reservation } from "@/types/reservation";
import type { User } from "@/types/user";

export default function DashboardPage() {
  const router = useRouter();
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchReservations = async () => {
      const token = localStorage.getItem("jwt");
      const storedUser: User = JSON.parse(localStorage.getItem("user") || "{}");
      setUser(storedUser);

      if (!token || (!storedUser.id && !storedUser.email)) return;

      try {
        const res = storedUser.id
          ? await fetchReservationsByUser(String(storedUser.id))
          : await fetchReservationsByUser(storedUser.email);
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
    <main className="p-8 max-w-3xl mx-auto">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Mon espace</h1>
          {user && (
            <p className="text-gray-600">
              Connecté en tant que :{" "}
              <span className="font-semibold">{user.username} </span>
            </p>
          )}
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Se déconnecter
        </button>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Mes réservations</h2>
        {reservations.length === 0 ? (
          <p className="text-gray-500">
            Vous n&apos;avez aucune réservation pour le moment.
          </p>
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
                  setReservations((prev) =>
                    prev.filter((r) => r.id !== res.id)
                  );
                }
              };

              return (
                <li
                  key={res.id}
                  className="border p-4 rounded shadow hover:shadow-md transition"
                >
                  <h3 className="font-bold text-lg mb-1">{coaching.titre}</h3>
                  <p className="text-sm text-gray-600 mb-1">
                    {new Date(coaching.date_heure).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    Salle : {coaching.salle}
                  </p>
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
      </section>
    </main>
  );
}
