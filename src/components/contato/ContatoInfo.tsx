import { MessageCircle, Mail, Instagram } from "lucide-react";

const ContatoInfo = () => (
  <div className="space-y-6">
    <div className="rounded-[28px] border border-border bg-card p-8 shadow-sm">
      <h3 className="text-2xl font-semibold text-foreground">
        Outras formas de contato
      </h3>

      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-3">
          <MessageCircle className="text-gold" />
          <span className="text-sm text-foreground">
            WhatsApp (resposta rápida)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="text-gold" />
          <span className="text-sm text-foreground">
            email@email.com
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Instagram className="text-gold" />
          <span className="text-sm text-foreground">
            @rafaella.biasi
          </span>
        </div>
      </div>
    </div>

    <div className="rounded-[28px] border border-border bg-secondary p-8">
      <h4 className="text-lg font-semibold text-foreground">
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
