import "./app.css";
const App = () => {
    return (
      <div>
        <h1>Bem vindo ao mundo React</h1>
        <button>eu sou um botão html</button>
        <ul>{listTarefas}</ul>
      </div>
    );
  }
  const tarefas = [
    { title: 'Tirar o lixo', id: 1 },
    { title: 'Lavar o banheiro', id: 2 },
    { title: 'Levar o cachorro pra passear', id: 3 },
  ];
  
  const listTarefas = tarefas.map(tarefa =>
    <li key={tarefa.id}>
      {tarefa.title}
    </li>
      );

  export default App;
  