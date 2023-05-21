import { useState } from 'react';
import useTodo from './hooks/useTodo';
import formatDate from './utils/date';

export function App() {
  const { addTodo, error, isFetching, todos, editTodo } = useTodo();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const [id, setId] = useState(null);

  if (isFetching) {
    return <h1>Carregando...</h1>;
  }

  if (error) {
    return <h1>Erro ao buscar dados</h1>;
  }

  function fillStates(todo) {
    setId(todo._id);

    setTitle(todo.title);

    const dateFormatted = todo.date.split('T')[0];
    setDate(dateFormatted);
  }

  return (
    <>
      <div>
        <input
          type='text'
          placeholder='Título'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='date'
          placeholder='Data'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          onClick={() => {
            if (id) {
              editTodo({ payload: { title, date }, id: id });
              setId(null);
            }
            addTodo({ title, date });
          }}
        >
          Salvar
        </button>
      </div>
      <div>
        <h1>TODOs:</h1>
        <ul>
          {todos.map((todo, i) => (
            <li key={i}>
              <h2>{todo.title}</h2>
              <p>{formatDate(todo.date)}</p>
              <button onClick={() => fillStates(todo)}>Editar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
