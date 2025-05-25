# Pokedex App

Aplicação web desenvolvida com **React.js + TypeScript**, utilizando **styled-components** para a estilização e **PokeAPI** como fonte de dados. O objetivo é exibir informações sobre Pokémons de forma simples e bonita, explorando boas práticas com componentes reutilizáveis, organização de código e consumo de API externa.

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [styled-components](https://styled-components.com/)
- [axios](https://axios-http.com/)
- [PokeAPI](https://pokeapi.co/)

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/ElielJunior/pokedex-app.git
cd pokedex-app

instale as dependencias
npm install

execute o projeto

O projeto estará disponível em http://localhost:5173

src/
├── components/       # Componentes reutilizáveis
├── pages/            # Páginas principais da aplicação
├── services/         # Configuração de API
├── styles/           # Estilizações globais e temas
├── types/            # Tipagens TypeScript
├── App.tsx           # Componente principal
└── main.tsx          # Ponto de entrada da aplicação

Listagem de Pokémons com imagem e nome

Página de detalhes com mais informações do Pokémon

Estilização responsiva com styled-components

Consumo dinâmico de dados da API
npm run dev
