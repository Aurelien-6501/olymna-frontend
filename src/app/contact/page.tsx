"use client";

import React from "react";

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Nous contacter</h1>
      <p className="mb-6 text-gray-700">
        Une question, une remarque, ou besoin d&apos;informations
        supplémentaires ? Remplissez le formulaire ci-dessous ou écrivez-nous
        directement à{" "}
        <a href="mailto:contact@olymna.fr" className="text-blue-600 underline">
          contact@olymna.fr
        </a>
        .
      </p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-800">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium text-gray-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-medium text-gray-800">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:opacity-90"
        >
          Envoyer
        </button>
      </form>
    </main>
  );
}
