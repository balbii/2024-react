import "./app.css";
import { useState } from "react";

const ListaDeTarefas = (props: any) => {
  return (
  <>
    <ul> 
      {
      props.dados.map((item: any) => {
        return <ItemTarefa key={item.id} titulo={item.titulo} />
      })
      }
    </ul>
  </>
  );
}

const ItemTarefa = (props: any) => {
  return(<li>{props.titulo}</li>);
}

const App = () => {
  const [tarefa, setTarefa] = useState("digite uma tarefa");
  
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      titulo: "capinar o terreno",
      concluido: false,
    },
    {
      id: 2,
      titulo: "levantar o muro",
      concluido: false,
    },
    {
      id: 3,
      titulo: "cortar cana",
      concluido: false,
    }
  ]);

  const escutarClique = () => {
    console.log("clicou");
    console.info(tarefa);
    const objeto = {
      id: tarefas.length + 1,
      titulo: tarefa,
      concluido: false,
    }
    console.info(objeto);
    setTarefas([
      ...tarefas,
      objeto
    ]);
  }

  const escutarModif = (evento: any) => {
    setTarefa(evento.target.value);
  }

    return (
      <div>
        <h1>React - Eventos e Estados</h1>
        <div>
          <label htmlFor="tarefa">Nova tarefa: </label>
          <input type="text" value={tarefa} id="tarefa" onChange={escutarModif} />
          <button onClick={escutarClique}>Adicionar</button>
        </div>
        <ListaDeTarefas dados={tarefas} />
      </div>
    );
  }
  
  export default App;
  