<div align="center">
	<img src="./public/logo-white.svg" alt="Logo Júnior Melo" width="80" height="80" />
  
	# Portfólio • Júnior Melo
  
	**Full Stack | Data & AI | DevOps | Arquitetura de Soluções**  
	Python · Django · React · React Native · ETL · Databricks · Transparência Pública · Observabilidade
</div>

## 📌 Visão Geral
Código-fonte do meu portfólio pessoal (Vite + React + TypeScript + Tailwind + shadcn/ui).  
Apresento experiência, competências técnicas, projetos (governo e setor privado), transparência e meios de contato.

## 🛠 Principais Competências

### Linguagens & Frameworks
![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?logo=django&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![React Native](https://img.shields.io/badge/React%20Native-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)

### Dados & Engenharia
![SQL](https://img.shields.io/badge/SQL-336791?logo=postgresql&logoColor=white)
![Airflow](https://img.shields.io/badge/Apache%20Airflow-017CEE?logo=apache-airflow&logoColor=white)
![Databricks](https://img.shields.io/badge/Databricks-FF3621?logo=databricks&logoColor=white)
![Power BI](https://img.shields.io/badge/Power%20BI-F2C811?logo=powerbi&logoColor=black)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?logo=streamlit&logoColor=white)

### DevOps & Infra
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?logo=nginx&logoColor=white)
![Postgres](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=white)
![Celery](https://img.shields.io/badge/Celery-37814A?logo=celery&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?logo=linux&logoColor=black)

### Outras
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=github-actions&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?logo=visual-studio-code&logoColor=white)
![WSL2](https://img.shields.io/badge/WSL2-4D4D4D?logo=linux&logoColor=white)
![AI Assisted Dev](https://img.shields.io/badge/AI%20Coding-9146FF?logo=openai&logoColor=white)

## 📂 Estrutura do Projeto
```
src/
	components/
	pages/
	hooks/
	lib/
	utils/
public/
assets/   # (fotos e imagens de projetos - adicionar manualmente)
```

## ▶️ Executar Localmente

Requisitos: Node 18+ e pnpm (ou npm/yarn).

```bash
pnpm install
pnpm dev
```

Aplicação em: http://localhost:8080

## 🏗 Build
```bash
pnpm build
```
Saída em `dist/`.

## 🚀 Deploy no GitHub Pages

1. Certifique-se que o repositório chama `portifoliomelojrx` e está em: `https://github.com/<usuario>/portifoliomelojrx`.
2. O build usa base `/portifoliomelojrx/` já configurada em `vite.config.ts`.
3. Workflow em `.github/workflows/deploy.yml` faz:
	 - build
	 - publicação no branch `gh-pages`
4. Ativar GitHub Pages apontando para o branch `gh-pages` (folder root).

Deploy manual (opcional):
```bash
pnpm build
git subtree push --prefix dist origin gh-pages
```

## 👤 Sobre Mim
Economista, Analista de Sistemas, Pós em Ciência de Dados, LGPD e Administração Pública. Servidor Público Federal no Ministério da Gestão e Inovação atuando com Engenharia de Dados, IA e Transparência. Experiência em concepção end‑to‑end: requisitos, arquitetura, desenvolvimento assistido por IA, CI/CD, observabilidade e deploy (Docker, Compose, Nginx, Gunicorn, Postgres, Celery, Redis).

## ⭐ Projetos Destacados
- UrbanLive – Plataforma cívica conectando cidadãos e governo (dados urbanos, transparência e participação).
- Costurai.com.br – Sistema completo para gestão de confecções + marketplace de serviços de costura.
- Indicaai – Marketplace de necessidades com recomendações e gamificação.
- Obreiro Virtual – Gestão e governança eclesiástica moderna.
- Dashboards de Transparência – Painéis interativos (Power BI, Qlik Sense, Databricks) para governo federal.

## 🧭 Roadmap
- Adicionar imagens reais em `assets/` e atualizar `Projects.tsx`.
- Criar páginas de estudo de caso individuais.
- Incluir analytics (Plausible/GA) se desejado.

## 📫 Contato
| Canal | Link |
|-------|------|
| Email | [jrmeloafrf@gmail.com](mailto:jrmeloafrf@gmail.com) |
| GitHub | https://github.com/melojrx |
| LinkedIn | https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=júnior-melo-a4817127 |
| Medium | https://medium.com/@jrmeloafrf |

## 📄 Licença
Uso pessoal / portfólio. Conteúdo textual, imagens e marca não devem ser reutilizados sem permissão prévia.

---

<div align="center">
Feito com código, dados e ☕ por **Júnior Melo**
</div>

