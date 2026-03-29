import { MessageCircle, Mail, Instagram } from "lucide-react";

const ContatoInfo = () => (
  <div className="space-y-6">
    <div className="rounded-[28px] border border-[#e8e0d4] bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-semibold text-[#15233b]">
        Outras formas de contato
      </h3>

      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-3">
          <MessageCircle className="text-[#d08a21]" />
          <span className="text-sm text-[#15233b]">
            WhatsApp (resposta rápida)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="text-[#d08a21]" />
          <span className="text-sm text-[#15233b]">
            email@email.com
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Instagram className="text-[#d08a21]" />
          <span className="text-sm text-[#15233b]">
            @rafaella.biasi
          </span>
        </div>
      </div>
    </div>

    <div className="rounded-[28px] border border-[#e8e0d4] bg-[#f6f1e8] p-8">
      <h4 className="text-lg font-semibold text-[#15233b]">
        ✨ Primeira conversa sem compromisso
      </h4>

      <p className="mt-3 text-sm text-slate-600 leading-7">
        A ideia é entender seu momento, seus objetivos e ver se faz sentido
        seguirmos juntos nesse processo.
      </p>
    </div>
  </div>
);

export default ContatoInfo;
