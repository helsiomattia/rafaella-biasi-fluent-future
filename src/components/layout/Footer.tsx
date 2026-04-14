import { Link } from "react-router-dom";
import { FOOTER_LINKS } from "@/data/constants";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-2xl font-semibold mb-4 text-primary-foreground">
            Rafaella <span className="text-accent">Biasi</span>
          </h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Professora de inglês especializada em ensino personalizado para adultos que buscam fluência real.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-medium mb-4 text-primary-foreground">Navegação</h4>
          <div className="flex flex-col gap-2">
            {FOOTER_LINKS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-medium mb-4 text-primary-foreground">Contato</h4>
          <p className="text-sm text-primary-foreground/60">Aulas 100% online</p>
          <p className="text-sm text-primary-foreground/60 mt-1">Para alunos de todo o Brasil e do mundo</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Rafaella Biasi. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
