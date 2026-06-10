import { useEffect, useState } from "react";
import Todos from "./componentes/Todos";
import TodoForm from "./componentes/TodoForm";
import "./index.css";
function App() {
  const salvarLocal = localStorage.getItem("todos"); //pegar o array
  //const [valorAtual, setvalorAtual] = useState("");
  const [todos, setTodos] = useState(
    salvarLocal ? JSON.parse(salvarLocal) : [],
  ); // se tiver o array, transforme em obj, caso contrario transforme em um array vazio

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // fique olhando o todos, se alterado, transforme a variavel todos em string
  }, [todos]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };
const completar = (idTarefaqueCompletou) => {
  alert("Concluiu a tarefa");
  const novaLista= todos.filter((tarefa) =>{
    if (tarefa.id !==idTarefaqueCompletou){
      return tarefa
    }
    else{
      return null
    }
  })
  setTodos(novaLista); 
   
};

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filterTodos = newTodos.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      } else {
        return null;
      }
    });
    setTodos(filterTodos);
  };

 



  return (
    <>
      <h1>Lista de tarefas</h1>
      {todos.map((todo) => {
        return (
          <Todos
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completar={completar}
          />
        );
      })}
      <TodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
