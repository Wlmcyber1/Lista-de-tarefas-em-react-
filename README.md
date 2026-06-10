# Lista de Tarefas em React 📝

Este é um projeto de uma **Lista de Tarefas (To-Do List)** desenvolvido em React. O objetivo principal deste repositório é a aplicação prática de conceitos fundamentais do ecossistema React, como manipulação de estado (`useState`), controle de efeitos colaterais (`useEffect`), persistência de dados local (`localStorage`) e a correta comunicação e passagem de propriedades (props) entre componentes.

📌 **Nota Importante:** Este projeto foi desenvolvido estritamente para **fins de estudo**. Caso encontre alguma inconsistência, comportamento inesperado ou erro de lógica, lembre-se de que ele faz parte de um processo de aprendizado e evolução contínua!

---

## 🚀 Tecnologias Utilizadas

* **React** (Biblioteca JavaScript para construção de interfaces)
* **JavaScript (ES6+)**
* **CSS3** (Estilização customizada via `index.css`)
* **LocalStorage** (Para persistência das tarefas no navegador)
* **Vite** (Ferramenta de build rápida para o desenvolvimento)

---

## 📂 Estrutura de Componentes

O projeto adota uma arquitetura modular e de fácil manutenção, dividida da seguinte forma:

1. **`App.jsx` (Componente Pai):** Centraliza as regras de negócio e o estado global da aplicação (`todos`). É responsável por carregar os dados iniciais, atualizar o `localStorage` através de efeitos e distribuir as funções de lógica (`addTodo`, `removeTodo`, `completar`) para os elementos filhos.
2. **`Todos.jsx`:** Componente encarregado de renderizar cada tarefa individualmente, gerenciando a exibição textual e os gatilhos de eventos dos botões (como a conclusão e a remoção), tratando corretamente o escopo das funções com parâmetros.
3. **`TodoForm.jsx`:** Componente que isola a lógica do formulário de captura, permitindo que o usuário crie novas tarefas com textos e categorias dinâmicas.
4. **`index.css`:** Arquivo central de estilos, contendo toda a identidade visual, cores e regras de design aplicadas globalmente na aplicação.

---

## 🛠️ Como Executar o Projeto Localmente

Para clonar e rodar este projeto na sua máquina de desenvolvimento, siga os passos abaixo:

### Pré-requisitos
É necessário ter o [Node.js](https://nodejs.org/) instalado em seu sistema operacional.

### Passos:
1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/Wlmcyber1/Lista-de-tarefas-em-react-
   ```
2. **Entrar no diretório raiz**
    ```bash
   cd Lista-de-tarefas-em-react-
   ```
3. **Entrar na pasta do projeto React (todo)**
    ```bash
   cd todo
   ```
4. **Instalar todas as dependências do projeto**:
   ```bash
   npm install
   ```
5. **Iniciar o servidor local de desenvolvimento:**
   ```bash
   npm run dev
   ```
  
