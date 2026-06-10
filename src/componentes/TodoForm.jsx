import React, { useState } from "react";
import Todos from "./Todos";

function TodoForm({ addTodo }) {
  const [valor, setValor] = useState(""); // valor do titulo
  const [categoria, setCategoria] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valor || !categoria) return;
    addTodo(valor, categoria);
    setValor("");
    setCategoria("");

    
  };
  return (
    <div>
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o titulo"
          value={valor}
          onChange={(evento) => {
            setValor(evento.target.value);
          }}
        />
        <select
          value={categoria}
          onChange={(evento) => {
            setCategoria(evento.target.value);
          }}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar </button>
      </form>
    </div>
  );
}

export default TodoForm;
