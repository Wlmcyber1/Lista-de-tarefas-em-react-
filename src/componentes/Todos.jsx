import { useEffect, useState } from "react";

const Todos = ({ todo, removeTodo, completar }) => {
  //passo a função que está no pai para o filho como se fosse uma prop e uso ele no onclick

  return (
    <li>
      <span>{todo.text}</span>
      <p className="categorias">({todo.category})</p>
      <div>
        <button onClick={()=>completar(todo.id)}>Completar</button>
        <button onClick={() => removeTodo(todo.id)}>x</button>
      </div>
    </li>
  );
};
export default Todos;
