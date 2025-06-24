export default function MentionsLegalesPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Éditeur du site</h2>
        <p>
          Le site Olymna est édité par Olymna SAS, dont le siège social est
          situé au 10 rue de la Forme, 75000 Paris, France.
        </p>
        <p>
          Numéro de SIRET : 123 456 789 00010
          <br />
          Email : contact@olymna.fr
          <br />
          Téléphone : +33 1 23 45 67 89
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Hébergement</h2>
        <p>
          Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
          91789, États-Unis.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Propriété intellectuelle</h2>
        <p>
          L’ensemble des contenus présents sur le site Olymna (textes, images,
          logos, etc.) sont la propriété exclusive d’Olymna ou de ses
          partenaires, et sont protégés par le droit d’auteur. Toute
          reproduction sans autorisation est interdite.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Responsabilité</h2>
        <p>
          Olymna décline toute responsabilité en cas d’interruption du site ou
          de survenance de bugs, ainsi qu’en cas d’inexactitude ou d’omission
          portant sur des informations disponibles sur le site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Données personnelles</h2>
        <p>
          Conformément à la réglementation en vigueur, vous disposez d’un droit
          d’accès, de rectification et de suppression des données vous
          concernant. Pour exercer ce droit, vous pouvez nous contacter à
          l’adresse suivante : contact@olymna.fr.
        </p>
      </section>
    </main>
  );
}
