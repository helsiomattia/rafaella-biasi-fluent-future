# 🚀 Rafaella Biasi - Fluent Future

Plataforma web desenvolvida para apresentar serviços, conteúdos e experiências relacionadas ao aprendizado de idiomas de forma moderna, interativa e escalável.

👉 **Acesse o projeto online:**
https://helsiomattia.github.io/rafaella-biasi-fluent-future/

---

## 📌 Sobre o projeto

O **Fluent Future** é uma aplicação front-end desenvolvida com foco em:

* Apresentação institucional de serviços
* Experiência do usuário moderna e responsiva
* Estrutura escalável para evolução futura (dashboard, área logada, conteúdo)
* Simulação de fluxo de autenticação e áreas protegidas

O projeto simula uma aplicação real de produto digital, com rotas públicas e privadas, arquitetura modular e integração com ferramentas modernas do ecossistema front-end.

---

## 🧠 Funcionalidades

* ✅ Landing page institucional
* ✅ Navegação com múltiplas páginas
* ✅ Área de login
* ✅ Rotas protegidas (Protected Routes)
* ✅ Dashboard (estrutura inicial)
* ✅ Área administrativa (Admin)
* ✅ Sistema de tema (Dark/Light mode)
* ✅ Gerenciamento de estado com React Query
* ✅ Estrutura preparada para expansão (SaaS/Plataforma)

---

## 🛠️ Tecnologias utilizadas

* **React**
* **TypeScript**
* **Vite**
* **React Router DOM**
* **React Query (@tanstack/react-query)**
* **Tailwind CSS**
* **Radix UI / shadcn/ui**
* **Vitest (testes unitários)**
* **Playwright (testes E2E)**
* **GitHub Actions (CI/CD)**
* **GitHub Pages (Deploy)**

---

## 🏗️ Estrutura do projeto

```bash
src/
├── components/     # Componentes reutilizáveis
├── pages/          # Páginas da aplicação
├── hooks/          # Hooks customizados
├── lib/            # Configurações e utilitários
├── data/           # Dados mockados
├── types/          # Tipagens TypeScript
├── test/           # Testes
```

---

## 🔐 Arquitetura de rotas

O projeto utiliza uma separação clara entre:

* 🌐 **Rotas públicas**

  * Home
  * About
  * Services
  * Method
  * Hub

* 🔒 **Rotas protegidas**

  * Dashboard
  * Admin

Controladas através de um componente:

```tsx
<ProtectedRoute>
```

---

## 🚀 Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/helsiomattia/rafaella-biasi-fluent-future.git

# Acesse a pasta
cd rafaella-biasi-fluent-future

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

---

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes E2E
npx playwright test
```

---

## ⚙️ CI/CD

O projeto possui pipeline automatizado utilizando **GitHub Actions**, responsável por:

* Instalação de dependências
* Build da aplicação
* Deploy automático para GitHub Pages

---

## 📈 Próximos passos (Roadmap)

* [ ] Integração com backend real (auth + API)
* [ ] Persistência de dados (usuários / progresso)
* [ ] Dashboard funcional com métricas
* [ ] Área de conteúdos (blog/hub)
* [ ] Melhoria de SEO
* [ ] Analytics (Google Analytics / PostHog)
* [ ] Testes E2E mais completos
* [ ] Otimização de performance (bundle splitting)

---

## 💡 Diferenciais do projeto

* Estrutura pensada como **produto real (não apenas landing page)**
* Separação clara de responsabilidades
* Uso de boas práticas modernas de front-end
* Pipeline de deploy automatizado
* Pronto para evolução para SaaS

---

## 👨‍💻 Autor

Desenvolvido por **Helsio Mattia**

* GitHub: https://github.com/helsiomattia
* LinkedIn: (adicione aqui se quiser)

---

## 📄 Licença

Este projeto está sob a licença MIT.
