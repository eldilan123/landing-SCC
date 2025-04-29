"use client";
import React, { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzzrdzbj";

const ContactForm: React.FC<{ onDone: () => void }> = ({ onDone }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...form,
        _subject: "Nuevo mensaje desde la landing", // opcional
      }),
    });

    setLoading(false);

    if (res.ok) {
      setSent(true);
      setTimeout(onDone, 1500); // cierra modal tras 1.5 s
    } else {
      setError(true);
    }
  };

  if (sent) return <p className="text-center text-green-600">¡Mensaje enviado! ✅</p>;

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <input
        required
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        className="border rounded-lg p-3"
      />
      <input
        required
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border rounded-lg p-3"
      />
      <textarea
        required
        name="message"
        rows={4}
        placeholder="Cuéntanos tu necesidad…"
        value={form.message}
        onChange={handleChange}
        className="border rounded-lg p-3 resize-none"
      />
      {error && (
        <p className="text-red-600 text-sm -mt-2">
          Ocurrió un error. Intenta de nuevo.
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="bg-[#FC4554] text-white py-3 rounded-full font-semibold hover:bg-[#e02b43] transition"
      >
        {loading ? "Enviando…" : "Enviar"}
      </button>
    </form>
  );
};

export default ContactForm;
