const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL?.replace(/\/$/, "");

export async function cancelReservation(
  id: string | number,
  token: string
): Promise<boolean> {
  const numericId = typeof id === "string" ? parseInt(id, 10) : id;
  try {
    const deleteRes = await fetch(`${API_URL}/reservations/${numericId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!deleteRes.ok) {
      console.error(
        `Erreur ${deleteRes.status} lors de la suppression de la réservation`
      );
      return false;
    }

    console.log("Suppression effectuée avec succès");
    return true;
  } catch (error) {
    console.error("Erreur lors de la suppression de la réservation :", error);
    return false;
  }
}
