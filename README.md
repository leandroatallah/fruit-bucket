# Desafio - Fruit Bucket

## Sobre o projeto

O objetivo desse projeto é desenvolver um aplicativo de página única (SPA) simples para o gerenciamento offline de baldes de frutas através do navegador. De modo resumido, baldes podem armazenar frutas, e cada fruta possui um preço definido. A aplicação deve consistir de uma interface que permita a criação e manipulação dessas instâncias das entidades Balde e Fruta, de acordo com as regras especificadas.

## Estrutura do Projeto

O projeto segue a estrutura de pastas e arquivos de uma aplicação Vite + React + TypeScript padrão. A pasta `src` contém os arquivos principais da aplicação, e a pasta `public` contém os arquivos estáticos. Veja abaixo a estrutura das principais pastas e arquivos do projeto:

```sh
┌
├──  src/
│    ├──  assets/
│    ├──  components/
│    │    ├──  Button/
│    │    │    ├──  Button.test.tsx
│    │    │    ├──  Button.styles.tsx
│    │    │    └──  index.tsx
│    │    └──  ...
│    ├──  hooks/
│    ├──  interfaces/
│    ├──  store/
│    ├──  tests/
│    ├──  utils/
│    └──  ...
└──  ...
```

### Instalação

```bash
npm install
```

### Execução

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Testes Unitários

```bash
npm run test
```

### Testes End-to-End

Execute o projeto:

```bash
npm run dev
```

e em outro terminal execute:

```bash
npm run cypress:open
```

## Tecnologias Utilizadas

- [Node.js 18+](https://nodejs.org/en)
- [Typescript](https://www.typescriptlang.org/)
- [React.js](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Zustand](https://zustand.surge.sh/)
- [Vitest](https://vitest.dev/)
- [Cypress](https://www.cypress.io/)

## Regras de negócio

A aplicação deve consistir de uma interface que permita a criação e manipulação dessas instâncias das entidades Balde e Fruta, de acordo com as regras abaixo.

Cada Balde é criado com um valor de capacidade máxima, referente à quantidade máxima de frutas que podem ser depositadas dentro dele. Após sua criação, um Balde pode ser excluído, desde que esteja vazio. Cada instância de Fruta é criada com as informações de nome e preço. O campo nome se refere à qualquer string simples que o usuário deseje utilizar para nomear a fruta, enquanto preço se refere ao custo da mesma. Além disso, frutas podem ser depositadas e removidas entre os diferentes baldes disponíveis.

A UI da sua aplicação deve suportar os seguintes casos de uso:

- Registrar/excluir baldes;
- Registrar frutas;
- Depositar/remover frutas de um balde;
- Visualizar a lista completa de baldes, com o valor total da soma dos preços das frutas em cada um, ordenados de modo decrescente pela sua ocupação (% da capacidade ocupada). Essa lista deve estar visível e atualizada durante todo o fluxo da aplicação, enquanto baldes e frutas são criados, realocados, etc.

## Padrões de Projeto

### Componentes

- Todos os componentes devem ser criados na pasta `src/components`. Cada componente deve possuir uma pasta com o nome do componente, contendo um arquivo `index.tsx` com o componente raíz. Também pode conter arquivos de estilos, testes e outros arquivos necessários para o componente.
- Pela baixa complexidade do projeto e por não se ter muitos componentes, não foi utilizado um framework de componentes ou uma metodologia como _Atomic Design_ para a criação de componentes.

### Estilização

- A estilização dos componentes deve ser feita utilizando _Styled Components_.

### Testes

- O projeto utiliza as bibliotecas _Vitest_ e _React Testing Library_ para a execução de testes unitários. Os testes de componentes devem ser escritos na pasta do componente, com o sufixo `.test.tsx`.
- O projeto utiliza a biblioteca _Cypress_ para a execução de testes end-to-end. Os testes end-to-end devem ser escritos na pasta `cypress/e2e`.
- Para melhor organização, algumas comandos customizados foram adicionados ao arquivo `cypress/support/commands.ts`, para evitar repetição de código.

### Gerenciamento de Estado

- O projeto utiliza a biblioteca _Zustand_ para o gerenciamento de estado global da aplicação. O estado global da aplicação deve ser criado na pasta `src/store`.
- Foi utilizado o próprio _Zustand_ para persistir o estado da aplicação no _LocalStorage_.
