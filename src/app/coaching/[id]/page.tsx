"use client";
import { useRouter } from "next/navigation";

import { fetchCoachingById } from "@/lib/api/coaching";
import { notFound } from "next/navigation";

import { useEffect, useState, use } from "react";
import { Coaching } from "@/types/strapi";

export default function CoachingDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(props.params);
  const [coaching, setCoaching] = useState<Coaching | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCoachingById(id);
      setCoaching(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <main className="p-8 max-w-3xl mx-auto">
        <p>Chargement...</p>
      </main>
    );
  }

  if (!coaching) {
    notFound();
    return null;
  }

  const { titre, description, date_heure, salle, nb_places, coach } = coaching;

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{titre}</h1>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-sm text-gray-600 mb-2">
        Date : {new Date(date_heure).toLocaleString()}
      </p>
      <p className="text-sm text-gray-600 mb-2">Salle : {salle}</p>
      <p className="text-sm text-gray-600 mb-4">
        Places disponibles : {nb_places}
      </p>
      {coach && (
        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="font-semibold">
            Coach : {coach.prenom} {coach.nom}
          </p>
          <p className="text-sm text-gray-600">{coach.specialisation}</p>
        </div>
      )}
      <ReservationButton />
    </main>
  );
}

function ReservationButton() {
  const router = useRouter();

  const handleClick = () => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      router.push("/login");
    } else {
      // Logique de réservation ici
      alert("Réservation en cours...");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-2 bg-black text-white rounded hover:opacity-90"
    >
      Réserver ce coaching
    </button>
  );
}
