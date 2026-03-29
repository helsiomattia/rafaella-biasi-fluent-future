import { useState } from "react";
import { Button } from "@/components/ui/button";

const ContatoForm = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    objetivo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Olá Rafa! Meu nome é ${form.nome}.
Email: ${form.email}
Objetivo: ${form.objetivo}`;

    const url = `https://wa.me/SEU_NUMERO_AQUI?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="rounded-[28px] border border-[#e8e0d4] bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-semibold text-[#15233b]">
        Me envie uma mensagem
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Respondo o mais rápido possível 🙂
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={form.nome}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-[#e6dfd6] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#d08a21]"
        />

        <input
          type="email"
          name="email"
          placeholder="Seu email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-[#e6dfd6] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#d08a21]"
        />

        <textarea
          name="objetivo"
          placeholder="Qual é seu objetivo com o inglês?"
          value={form.objetivo}
          onChange={handleChange}
          required
          rows={4}
          className="w-full rounded-xl border border-[#e6dfd6] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#d08a21]"
        />

        <Button
          type="submit"
          className="w-full h-12 rounded-xl bg-[#e59a24] text-[#15233b] hover:bg-[#d98d1c]"
        >
          Falar no WhatsApp
        </Button>
      </form>
    </div>
  );
};

export default ContatoForm;
