import { useEffect, useState } from 'react';
import { getTodos, addTodo } from './requests/todos';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

export function App() {
  /*   
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAPI();
  }, []);

  async function getAPI() {
    try {
      setLoading(true);
      const { data } = await getTodos();
      setTodos(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  if (error) {
    return <h1>Erro ao buscar dados</h1>;
  } 
*/
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const queryClient = useQueryClient();
  const { data, isFetching, error } = useQuery(['@todos'], getTodos, {
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation(addTodo, {
    onSuccess: () => queryClient.invalidateQueries(['@todos']),
    onError: () => alert('Error'),
  });

  if (isFetching) {
    return <h1>Carregando...</h1>;
  }

  if (error) {
    return <h1>Erro ao buscar dados</h1>;
  }

  return (
    <>
      <h1>TODOs:</h1>
      {/* {JSON.stringify(todos)} */}
      {JSON.stringify(data)}

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
        <button onClick={() => mutate({ title, date })}>Salvar</button>
      </div>
    </>
  );
}
