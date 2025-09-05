import "./App.css";
import { useState } from "react";
import Form from "./componentes/Form";
import List from "./componentes/List";

const App = () => {

  //lógica do componente
  const[tarefas, setTarefa] = useState([]);
  //estado para armazenar a list de tarefas

  const addTarefa = (tarefa) =>{
    setTarefa([...tarefas, tarefa]);
    //adiciona nova tarefa ao array de tarefas,
    // ...tarefas -> copia as anteriores + a nova
  }

  const removerTarefas = (index) => {
    setTarefa(tarefas.filter((_,i)=> i !== index));
    //cria um novo vetor sem a tarefas que quero remover
    //filtra a array removendo a posição index
  };

  //VIEW

  return(
    <div>
      <h1>To do List App</h1>
      <Form addTarefa={addTarefa}/>
        <List tarefas={tarefas} removerTarefas={removerTarefas}/>
    </div>
  )
};

export default App;